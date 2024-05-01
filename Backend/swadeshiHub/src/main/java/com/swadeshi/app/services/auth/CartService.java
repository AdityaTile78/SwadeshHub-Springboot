package com.swadeshi.app.services.auth;

import com.swadeshi.app.model.Cart;
import com.swadeshi.app.repositories.CartRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart addToCart(Cart cart) {
        // Perform additional logic if needed, e.g., check if the product and user exist
    	cart.setAddDate(LocalDateTime.now());
    	cart.setUpdDate(LocalDateTime.now());
        return cartRepository.save(cart);
    }
    

    public List<Cart> getCartsByUserId(String userId) {
        return cartRepository.findByUserId(userId);
    }

    public Cart getCartItem(Long cartId) {
        Optional<Cart> optionalCart = cartRepository.findById(cartId);
        return optionalCart.orElse(null);
    }

    public Cart updateCartItem(Long cartId, Cart updatedCart) {
        Optional<Cart> optionalCart = cartRepository.findById(cartId);

        if (optionalCart.isPresent()) {
            Cart cart = optionalCart.get();
            BeanUtils.copyProperties(updatedCart, cart);
            return cartRepository.save(cart);
        } else {
            // Handle not found case
            return null;
        }
    }

    public void deleteCartItem(Long cartId) {
        cartRepository.deleteById(cartId);
    }
}
