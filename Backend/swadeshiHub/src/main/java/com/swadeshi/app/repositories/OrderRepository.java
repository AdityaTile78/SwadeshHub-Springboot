package com.swadeshi.app.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.swadeshi.app.model.Order;


@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // Additional query methods if needed
	
	

	
	List<Order> findBySellerIdAndOrderStatus(String sellerId, String orderStatus);
   
	List<Order> findByUserIdAndOrderStatus(Long userId, String orderStatus);
	
	List<Order> findBySellerId(String sellerId);
	
	List<Order> findByUserId(Long userId);
	 Optional<Order> findByPaymentId(String paymentId);
	 
	 @Query("SELECT o FROM Order o WHERE o.userId = :userId AND o.orderStatus != 'Delivered'")
	    List<Order> findNotDeliveredOrdersByUserId(Long userId);
	 
	 
}