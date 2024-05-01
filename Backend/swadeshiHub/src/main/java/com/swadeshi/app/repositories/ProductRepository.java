package com.swadeshi.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swadeshi.app.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

	List<Product> findByStateNameIgnoreCaseAndCategoryNameIgnoreCaseAndSubCategoryNameIgnoreCase(
		    String stateName, String categoryName, String subCategoryName);

	
	List<Product> findByStateNameIgnoreCaseAndCategoryNameIgnoreCase(String stateName, String categoryName);
   
	List<Product> findByStateNameIgnoreCase(String stateName);
	
	List<Product> findBySellerId(String sellerId);
	
	

	 
}
