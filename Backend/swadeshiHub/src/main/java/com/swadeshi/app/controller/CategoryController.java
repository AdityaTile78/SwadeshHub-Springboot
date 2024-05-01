package com.swadeshi.app.controller;

import com.swadeshi.app.dto.CategoryDTO;
import com.swadeshi.app.exceptions.UserServiceException;
import com.swadeshi.app.model.Category;
import com.swadeshi.app.services.auth.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping("/{categoryId}")
    public Optional<Category> getCategoryById(@PathVariable long categoryId) {
        return categoryService.getCategoryById(categoryId);
    }

    @PostMapping
    public CategoryDTO addCategory(@RequestBody Category category) {
        try {
            Category createdCat = categoryService.saveOrUpdateCategory(category);
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setStatus(true);
            categoryDTO.setId(createdCat.getCat_id());
            categoryDTO.setMessage("Category added successfully");
            return categoryDTO;
        } catch (UserServiceException e) {
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setStatus(false);
            categoryDTO.setMessage("Error adding Category: " + e.getMessage());
            return categoryDTO;
        }
    }

    @PutMapping("/{categoryId}")
    public CategoryDTO updateCategory(@PathVariable long categoryId, @RequestBody Category category) {
        Category updatedCat = categoryService.updateCategory(category);
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setStatus(true);
        categoryDTO.setId(updatedCat.getCat_id());
        categoryDTO.setMessage("Category added successfully");
        return categoryDTO;
    }

    @DeleteMapping("/{categoryId}")
    public void deleteCategory(@PathVariable long categoryId) {
        categoryService.deleteCategoryById(categoryId);
    }
}
