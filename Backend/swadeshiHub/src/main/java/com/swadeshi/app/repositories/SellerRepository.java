package com.swadeshi.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.swadeshi.app.model.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {
    // Additional query methods if needed
}