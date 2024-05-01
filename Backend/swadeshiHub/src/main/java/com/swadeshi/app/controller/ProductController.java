package com.swadeshi.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.swadeshi.app.dto.ProductDTO;
import com.swadeshi.app.dto.StateDTO;
import com.swadeshi.app.exceptions.UserServiceException;
import com.swadeshi.app.model.Product;
import com.swadeshi.app.model.State;
import com.swadeshi.app.services.auth.ProductService;

import io.jsonwebtoken.io.IOException;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) {
        Optional<Product> product = productService.getProductById(productId);
        return ResponseEntity.of(product);
    }
    @PostMapping
    public ProductDTO addProduct(@ModelAttribute Product product, @RequestParam("file") MultipartFile imageFile) throws java.io.IOException {
	    try {
	        // Validate or process the State object as needed

	    	
	        // Process the image file
	        byte[] img = imageFile.getBytes();
	        product.setImage(img);

	        // Add the Product
	        Product createdProduct = productService.addProduct(product);

	        // Create and return a response DTO
	        ProductDTO productDTO = new ProductDTO();
	        productDTO.setStatus(true);
	        productDTO.setId(createdProduct.getId());
	        productDTO.setMessage("Product added successfully");
	        return productDTO;
	    }  catch (IOException e) {
	        // Handle IOException
	    	ProductDTO productDTO = new ProductDTO();
	    	productDTO.setStatus(false);
	    	productDTO.setMessage("Error while processing image: " + e.getMessage());
	        return productDTO;
	    }
	}

    
   	 

    @PutMapping("/{productId}")
    public ProductDTO updateProduct(@ModelAttribute Product updatedProduct,@PathVariable Long productId ,@RequestParam("file") MultipartFile imageFile) throws java.io.IOException {
	    try {
	        // Validate or process the State object as needed

	    	
	        // Process the image file
	        byte[] img = imageFile.getBytes();
	        updatedProduct.setImage(img);

	        // Add the Product
	        Product updatedProduct1 = productService.updateProduct(productId, updatedProduct);

	        // Create and return a response DTO
	        ProductDTO productDTO = new ProductDTO();
	        productDTO.setStatus(true);
	        productDTO.setId(updatedProduct1.getId());
	        productDTO.setMessage("Product updated successfully");
	        return productDTO;
	    }  catch (IOException e) {
	        // Handle IOException
	    	ProductDTO productDTO = new ProductDTO();
	    	productDTO.setStatus(false);
	    	productDTO.setMessage("Error while processing image: " + e.getMessage());
	        return productDTO;
	    }
	    
	    
	}
    

    @DeleteMapping("/{productId}")
    public ProductDTO deleteProduct(@PathVariable Long productId) {
        productService.deleteProduct(productId);
        ProductDTO productDTO = new ProductDTO();
        productDTO.setStatus(true);
        productDTO.setMessage("Product Deleted successfully");
        return productDTO;
    }
    
    @GetMapping("/products")
    public List<Product> getProducts(
            @RequestParam(name = "state") String state,
            @RequestParam(name = "category") String category,
            @RequestParam(name = "subcategory") String subcategory ) 
    {
        return productService.productsByStateAndCategoryAndSubCategory(state, category, subcategory);
    }

    @GetMapping("/productsByStateAndCategory")
    public List<Product> getProducts(
            @RequestParam(name = "state") String state,
            @RequestParam(name = "category") String category)
    {
        return productService.productsByStateAndCategory(state, category);
    }

    @GetMapping("/productsByState")
    public List<Product> getProducts(
            @RequestParam(name = "state") String state)
    {
        return productService.productsByState(state);
    }
    
   
    
    @GetMapping("/seller/{sellerId}")
    public List<Product> getProductsBySellerId(@PathVariable String sellerId) {
        return productService.getProductsBySellerId(sellerId);
    }

    
    
}
