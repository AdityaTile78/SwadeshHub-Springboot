package com.swadeshi.app.dto;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;

public class PaymentRequestDTO {
	
	private Long ordId;

    private Long userId;
  
    private Long sellerId;
 
    private String firstName;

    private String lastName;
 
    private String email;
 
    private String mobile;

    private String orderStatus;

    private LocalDateTime orderDate;

    private LocalDateTime shippedDate;
    
    @Column(name = "delivered_date")
    private LocalDateTime deliveredDate;
    
    @Column(name = "cancelled_date")
    private LocalDateTime cancelleddDate;
    
    private int quantity;
    
    private int totalAmount;

    private String address;
    
    private String city;
    
    private String Pincode;
    
    private String paymentId;
    
    private String paymentMode;
    
    private long productId;
    
    
  

	public PaymentRequestDTO() {
		super();
	}

	

	  public PaymentRequestDTO(Long ordId, Long userId, Long sellerId, String firstName, String lastName, String email,
			String mobile, String orderStatus, LocalDateTime orderDate, LocalDateTime shippedDate, LocalDateTime deliveredDate,
			LocalDateTime cancelleddDate, int quantity, int totalAmount, String address, String city, String pincode,
			String paymentId, String paymentMode, long productId) {
		super();
		this.ordId = ordId;
		this.userId = userId;
		this.sellerId = sellerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobile = mobile;
		this.orderStatus = orderStatus;
		this.orderDate = orderDate;
		this.shippedDate = shippedDate;
		this.deliveredDate = deliveredDate;
		this.cancelleddDate = cancelleddDate;
		this.quantity = quantity;
		this.totalAmount = totalAmount;
		this.address = address;
		this.city = city;
		Pincode = pincode;
		this.paymentId = paymentId;
		this.paymentMode = paymentMode;
		this.productId = productId;
	}



	public long getProductId() {
			return productId;
		}

		public void setProductId(long productId) {
			this.productId = productId;
		}
	public Long getOrdId() {
		return ordId;
	}

	public void setOrdId(Long ordId) {
		this.ordId = ordId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getSellerId() {
		return sellerId;
	}

	public void setSellerId(Long sellerId) {
		this.sellerId = sellerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public LocalDateTime getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDateTime orderDate) {
		this.orderDate = orderDate;
	}

	public LocalDateTime getShippedDate() {
		return shippedDate;
	}

	public void setShippedDate(LocalDateTime shippedDate) {
		this.shippedDate = shippedDate;
	}

	public LocalDateTime getDeliveredDate() {
		return deliveredDate;
	}

	public void setDeliveredDate(LocalDateTime deliveredDate) {
		this.deliveredDate = deliveredDate;
	}

	public LocalDateTime getCancelleddDate() {
		return cancelleddDate;
	}

	public void setCancelleddDate(LocalDateTime cancelleddDate) {
		this.cancelleddDate = cancelleddDate;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPincode() {
		return Pincode;
	}

	public void setPincode(String pincode) {
		Pincode = pincode;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	
    

}
