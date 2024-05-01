package com.swadeshi.app.controller;

import com.swadeshi.app.dto.AddToCartResponse;
import com.swadeshi.app.dto.CartDTO;
import com.swadeshi.app.model.Cart;
import com.swadeshi.app.model.Product;
import com.swadeshi.app.services.auth.CartService;
import com.swadeshi.app.services.auth.ProductService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/carts")
public class CartController {

	private final CartService cartService;
    private final ProductService productService; // Inject ProductService

    @Autowired
    public CartController(CartService cartService, ProductService productService) {
        this.cartService = cartService;
        this.productService = productService;
    }
    @PostMapping
    public ResponseEntity<AddToCartResponse> addToCart(@RequestBody CartDTO cartDTO) {
        // Fetch cart items for the user
        List<Cart> cartItems = cartService.getCartsByUserId(cartDTO.getUserId());
        
        // Check if the product is already present in the cart
        boolean productAlreadyInCart = cartItems.stream()
                .anyMatch(cartItem -> cartItem.getProduct().getId().equals(cartDTO.getProductId()));

        if (productAlreadyInCart) {
            // If product is already in the cart, return error response
            return ResponseEntity.ok(new AddToCartResponse(false, "Product is already present in the cart."));
        }

        // Product not in cart, proceed to add it
        Cart newItem = new Cart();
        Optional<Product> productOptional = productService.getProductById(cartDTO.getProductId());
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            newItem.setProduct(product);
            newItem.setQuantity(1);
            newItem.setUser_Id(cartDTO.getUserId());
            Cart addedCart = cartService.addToCart(newItem);
            return ResponseEntity.ok(new AddToCartResponse(true, "Product added to cart successfully."));
        } else {
            // Handle case where product is not found
            return ResponseEntity.notFound().build();
        }
    }

//    @GetMapping("/{userId}")
//    public ResponseEntity<Cart> getCartItem(@PathVariable Long userId) {
//        Cart cart = cartService.getCartItem(userId);
//        if (cart != null) {
//            return new ResponseEntity<>(cart, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
    
    @GetMapping("/{userId}")
    public List<Cart> getCartsByUserId(@PathVariable String userId) {
        return cartService.getCartsByUserId(userId);
    }

    @PutMapping("/{cartId}")
    public ResponseEntity<Cart> updateCartItem(@PathVariable Long cartId, @RequestBody Cart updatedCart) {
        Cart cart = cartService.updateCartItem(cartId, updatedCart);
        if (cart != null) {
            return new ResponseEntity<>(cart, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{cartId}")
    public ResponseEntity<CartDTO> deleteCartItem(@PathVariable Long cartId) {
        cartService.deleteCartItem(cartId);
        CartDTO cart= new CartDTO();
        cart.setCartId(cartId);
        cart.setSuccess(true);
        cart.setMessage("Cart Item Deleted");
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }
}
