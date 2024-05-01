package com.swadeshi.app.repositories;

import com.swadeshi.app.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findFirstByCatName(String catName);
}

