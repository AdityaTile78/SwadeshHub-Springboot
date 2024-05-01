package com.swadeshi.app.services.auth;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swadeshi.app.exceptions.UserServiceException;
import com.swadeshi.app.model.Product;
import com.swadeshi.app.model.State;
import com.swadeshi.app.repositories.ProductRepository;
import com.swadeshi.app.repositories.StateRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
    	List<Product> products = productRepository.findAll();
    	for(Product p : products) {
    		p.setImage(null);
    		
    	}
        return products;
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Product addProduct(Product product) {
    	if (product.getAdd_date() == null) {
            product.setAdd_date(LocalDate.now());
        }
    	
   

        // Always set the upd_date to the current date
        product.setUpd_date(LocalDate.now());

        
        // Add any business logic or validation before saving
        return productRepository.save(product);
    }

   
   
    	
    
    public Product updateProduct(Long id, Product updatedProduct) {
        Optional<Product> existingProduct = productRepository.findById(id);
        if (existingProduct.isPresent()) {
            Product product = existingProduct.get();
            // Update fields as needed
            product.setName(updatedProduct.getName());
            product.setPrice(updatedProduct.getPrice());
            product.setDescription(updatedProduct.getDescription());
            product.setImage(updatedProduct.getImage());
            product.setQuantity(updatedProduct.getQuantity());
            product.setDiscount(updatedProduct.getDiscount());

            // Save the updated product
            return productRepository.save(product);
        } else {
            // Handle product not found
            return null;
        }
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
    
    public List<Product> productsByState(String stateName) {
    	List<Product> products = productRepository.findByStateNameIgnoreCase(stateName);
//    	for(Product p : products) {
//    		p.setImage(null);
//    		
//    	}
        return products;
    }
    
    public List<Product> productsByStateAndCategoryAndSubCategory(String stateName, String categoryName, String subCategoryName) {
    	List<Product> products = productRepository.findByStateNameIgnoreCaseAndCategoryNameIgnoreCaseAndSubCategoryNameIgnoreCase(stateName,categoryName,subCategoryName);
    	for(Product p : products) {
    		p.setImage(null);
    		
    	}
        return products;
    }
    
    public List<Product> productsByStateAndCategory(String stateName, String categoryName) {
    	List<Product> products = productRepository.findByStateNameIgnoreCaseAndCategoryNameIgnoreCase(stateName, categoryName);
//    	for(Product p : products) {
//    		p.setImage(null);
//    		
//    	}
        return products;
    }
    
 // Inside the ProductService class
    public List<Product> getProductsBySellerId(String sellerId) {
        return productRepository.findBySellerId(sellerId);
    }
    
  

}
