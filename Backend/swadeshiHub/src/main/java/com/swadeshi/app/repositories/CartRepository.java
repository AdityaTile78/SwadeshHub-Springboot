package com.swadeshi.app.repositories;

import com.swadeshi.app.model.Cart;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
	List<Cart> findByUserId(String userId);
	
}