package com.swadeshi.app.services.auth;

import com.swadeshi.app.exceptions.UserServiceException;
import com.swadeshi.app.model.Category;
import com.swadeshi.app.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category saveOrUpdateCategory(Category category) {
        Optional<Category> isCategory = categoryRepository.findFirstByCatName(category.getCatName());
        if (isCategory.isEmpty()) {
            if (category.getAdd_date() == null) {
                category.setAdd_date(LocalDate.now());
            }
            category.setUpd_date(LocalDate.now());
            return categoryRepository.save(category);
        } else {
            throw new UserServiceException("Category already exists");
        }
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Optional<Category> getCategoryById(long categoryId) {
        return categoryRepository.findById(categoryId);
    }

    public void deleteCategoryById(long categoryId) {
        categoryRepository.deleteById(categoryId);
    }

    public Category updateCategory(Category category) {
        if (category.getAdd_date() == null) {
            category.setAdd_date(LocalDate.now());
        }
        category.setUpd_date(LocalDate.now());
        return categoryRepository.save(category);
    }
}
