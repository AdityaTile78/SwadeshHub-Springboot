package com.swadeshi.app.dto;

import java.util.Date;

import jakarta.persistence.Column;

public class OrderDTO {

//    private Long userId;
//    private String orderStatus;
//    private Date orderDate;
//    private String size;
//    private String color;
//    private int quantity;
//    private String address;
//    
//    
//	public OrderDTO() {
//		
//	}
//	public OrderDTO(Long userId, String orderStatus, Date orderDate, String size, String color, int quantity,
//			String address) {
//		super();
//		this.userId = userId;
//		this.orderStatus = orderStatus;
//		this.orderDate = orderDate;
//		this.size = size;
//		this.color = color;
//		this.quantity = quantity;
//		this.address = address;
//	}
//	public Long getUserId() {
//		return userId;
//	}
//	public void setUserId(Long userId) {
//		this.userId = userId;
//	}
//	public String getOrderStatus() {
//		return orderStatus;
//	}
//	public void setOrderStatus(String orderStatus) {
//		this.orderStatus = orderStatus;
//	}
//	public Date getOrderDate() {
//		return orderDate;
//	}
//	public void setOrderDate(Date orderDate) {
//		this.orderDate = orderDate;
//	}
//	public String getSize() {
//		return size;
//	}
//	public void setSize(String size) {
//		this.size = size;
//	}
//	public String getColor() {
//		return color;
//	}
//	public void setColor(String color) {
//		this.color = color;
//	}
//	public int getQuantity() {
//		return quantity;
//	}
//	public void setQuantity(int quantity) {
//		this.quantity = quantity;
//	}
//	public String getAddress() {
//		return address;
//	}
//	public void setAddress(String address) {
//		this.address = address;
//	}

	private Long ordId;

    private Long userId;
  
    private Long sellerId;
 
    private String firstName;

    private String lastName;
 
    private String email;
 
    private String mobile;

    private String orderStatus;

    private Date orderDate;

    private Date shippedDate;
    
    @Column(name = "delivered_date")
    private Date deliveredDate;
    
    @Column(name = "cancelled_date")
    private Date cancelleddDate;
    
    private int quantity;
    
    private double totalAmount;

    private String address;
    
    private String city;
    
    private String Pincode;
    
    private String paymentId;
    
    private String paymentMode;
    
    
   

	public OrderDTO() {
		super();
	}

	public OrderDTO(Long ordId, Long userId, Long sellerId, String firstName, String lastName, String email,
			String mobile, String orderStatus, Date orderDate, Date shippedDate, Date deliveredDate,
			Date cancelleddDate, int quantity, double totalAmount, String address, String city, String pincode,
			String paymentId, String paymentMode) {
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

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public Date getShippedDate() {
		return shippedDate;
	}

	public void setShippedDate(Date shippedDate) {
		this.shippedDate = shippedDate;
	}

	public Date getDeliveredDate() {
		return deliveredDate;
	}

	public void setDeliveredDate(Date deliveredDate) {
		this.deliveredDate = deliveredDate;
	}

	public Date getCancelleddDate() {
		return cancelleddDate;
	}

	public void setCancelleddDate(Date cancelleddDate) {
		this.cancelleddDate = cancelleddDate;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
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
