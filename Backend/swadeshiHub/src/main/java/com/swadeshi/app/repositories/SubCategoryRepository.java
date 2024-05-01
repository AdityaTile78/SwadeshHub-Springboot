package com.swadeshi.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swadeshi.app.model.Sub_category;



public interface SubCategoryRepository extends JpaRepository <Sub_category,Integer>{
	List<Sub_category> findByMainCategoryIgnoreCase(String mainCategory);
}
