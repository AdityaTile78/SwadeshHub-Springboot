package com.swadeshi.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.swadeshi.app.model.SellerForm;

@Repository
public interface SellerFormRepository extends JpaRepository<SellerForm, Long> {
    // Additional query methods if needed
}