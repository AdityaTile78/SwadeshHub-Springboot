package com.swadeshi.app.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;

  
    @Column(name = "user_Id")
    private String userId;

    @ManyToOne
    @JoinColumn(name = "prd_id")
    private Product product;

    
    private int quantity;

    @Column(name = "add_date", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime addDate;

    @Column(name = "upd_date", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    private LocalDateTime updDate;

	public Cart() {
		
	}

	public Cart(Long cartId, String user_Id, Product product, int quantity, LocalDateTime addDate,
			LocalDateTime updDate) {
		super();
		this.cartId = cartId;
		this.userId = userId;
		this.product = product;
	
		this.quantity = quantity;
		this.addDate = addDate;
		this.updDate = updDate;
	}

	public String getUser_Id() {
		return userId;
	}

	public void setUser_Id(String user_Id) {
		this.userId = user_Id;
	}

	public Long getCartId() {
		return cartId;
	}

	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}

	

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}


	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public LocalDateTime getAddDate() {
		return addDate;
	}

	public void setAddDate(LocalDateTime addDate) {
		this.addDate = addDate;
	}

	public LocalDateTime getUpdDate() {
		return updDate;
	}

	public void setUpdDate(LocalDateTime updDate) {
		this.updDate = updDate;
	}

  
}