package com.swadeshi.app.dto;

import java.time.LocalDateTime;

public class CartDTO {

	  private String userId;
	  
	  private Long productId;
	  
	  private boolean success;
	  
	  private String message;
	
	  private Long cartId;
	
	

	private int quantity;
	
	
	  public CartDTO(String userId,Long cartId, Long productId, boolean success, String message, int quantity) {
		super();
		this.userId = userId;
		this.productId = productId;
		this.success = success;
		this.message = message;
		this.quantity = quantity;
		this.cartId=cartId;
	}

	  
	public CartDTO() {
		super();
	}
	
	public Long getCartId() {
		return cartId;
	}


	public void setCartId(Long cartId) {
		this.cartId = cartId;
	}

	public boolean isSuccess() {
			return success;
		}


		public void setSuccess(boolean success) {
			this.success = success;
		}


		public String getMessage() {
			return message;
		}


		public void setMessage(String message) {
			this.message = message;
		}

	  public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	
    
}