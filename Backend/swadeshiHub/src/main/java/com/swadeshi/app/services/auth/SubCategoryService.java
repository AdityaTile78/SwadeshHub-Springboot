package com.swadeshi.app.services.auth;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swadeshi.app.model.Category;
import com.swadeshi.app.model.Sub_category;
import com.swadeshi.app.repositories.SubCategoryRepository;


@Service
public class SubCategoryService {

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    // Save or update a Sub_category entity
    public Sub_category saveOrUpdateSubCategory(Sub_category subCategory) {
        // Set the add_date if it's not provided
        if (subCategory.getAdd_date() == null) {
            subCategory.setAdd_date(LocalDate.now());
        }

        // Always set the upd_date to the current date
        subCategory.setUpd_date(LocalDate.now());

        return subCategoryRepository.save(subCategory);
    }

    // Get all Sub_categories
    public List<Sub_category> getAllSubCategories() {
        return subCategoryRepository.findAll();
    }

    // Get a Sub_category by ID
    public Optional<Sub_category> getSubCategoryById(int subCategoryId) {
        return subCategoryRepository.findById(subCategoryId);
    }

 // Delete a Sub_category by ID
    public void deleteSubCategoryById(int subCategoryId) {
        subCategoryRepository.deleteById(subCategoryId);
        }
    
    public Sub_category updateSub_category(Sub_category sub_category) {
        // Set the add_date if it's not provided
        if (sub_category.getAdd_date() == null) {
            sub_category.setAdd_date(LocalDate.now());
        }

        // Always set the upd_date to the current date
        sub_category.setUpd_date(LocalDate.now());

        return subCategoryRepository.save(sub_category);
    }
    
    public List<Sub_category> getSubCategoriesByMainCategory(String mainCategory) {
        return subCategoryRepository.findByMainCategoryIgnoreCase(mainCategory);
    }
}

