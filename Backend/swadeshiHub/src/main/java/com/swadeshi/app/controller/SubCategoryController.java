package com.swadeshi.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.swadeshi.app.dto.CategoryDTO;
import com.swadeshi.app.dto.SubCategoryDTO;
import com.swadeshi.app.exceptions.UserServiceException;
import com.swadeshi.app.model.Category;
import com.swadeshi.app.model.Sub_category;
import com.swadeshi.app.services.auth.SubCategoryService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/subcategory")
public class SubCategoryController {

	@Autowired
	private SubCategoryService subCategoryService;

	@GetMapping
	public List<Sub_category> getAllSubCategories() {
		return subCategoryService.getAllSubCategories();
	}

	@GetMapping("/{subCategoryId}")
	public Optional<Sub_category> getSubCategoryById(@PathVariable int subCategoryId) {
		return subCategoryService.getSubCategoryById(subCategoryId);
	}

	
	@PutMapping("/{subCategoryId}")
	public Sub_category updateSubCategory(@PathVariable int subCategoryId, @RequestBody Sub_category subCategory) {
		return subCategoryService.saveOrUpdateSubCategory(subCategory);
	}

	@DeleteMapping("/{subCategoryId}")
	public void deleteSubCategory(@PathVariable int subCategoryId) {
		subCategoryService.deleteSubCategoryById(subCategoryId);
	}

	@PostMapping
	public SubCategoryDTO addSub_Category(@RequestBody Sub_category sub_category) {
		try {
			Sub_category createdSubCat = subCategoryService.saveOrUpdateSubCategory(sub_category);
			SubCategoryDTO sub_categoryDTO = new SubCategoryDTO();
			sub_categoryDTO.setStatus(true);
			sub_categoryDTO.setId(createdSubCat.getCtr_id());
			sub_categoryDTO.setMessage("SubCategory added successfully");
			return sub_categoryDTO;
		} catch (UserServiceException e) {
			// Handle UserServiceException
			SubCategoryDTO sub_categoryDTO = new SubCategoryDTO();
			sub_categoryDTO.setStatus(false);
			sub_categoryDTO.setMessage("Error in adding SubCategory ");
			return sub_categoryDTO;
		}

	}

	@PutMapping("/{categoryId}")
	public SubCategoryDTO updateCategory(@PathVariable int categoryId, @RequestBody Sub_category sub_category) {

		Sub_category createdSubCat = subCategoryService.updateSub_category(sub_category);
		SubCategoryDTO sub_categoryDTO = new SubCategoryDTO();
		sub_categoryDTO.setStatus(true);
		sub_categoryDTO.setId(createdSubCat.getCtr_id());
		sub_categoryDTO.setMessage("SubCategory updated successfully");
		return sub_categoryDTO;
	}
	
	@GetMapping("/by/{mainCategory}")
	public List<Sub_category> SubCategoriesByMainCategory(@PathVariable String mainCategory) {
		return subCategoryService.getSubCategoriesByMainCategory(mainCategory);
	}

}
