package com.swadeshi.app.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name="product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
  
    private String name;
    private double price;
    private String description;
    @Lob
    @Column(name = "state_image", columnDefinition = "MEDIUMBLOB")
    private byte[] image; 
    private int quantity;
    private double discount;
    @Column
    private LocalDate add_date;

    @Column
    private LocalDate upd_date;
    
    
    private String categoryName;
    private String subCategoryName;
    private String stateName;

    @Column
    private String sellerId;

    private String brand;
    private String size;
    private String color;
    
	public Product() {
		
	}

	public Product(Long id, String name, double price, String description, byte[] image, int quantity, double discount,
			LocalDate add_date, LocalDate upd_date, String categoryName, String subCategoryName, String stateName,
			String sellerId, String brand, String size, String color) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.image = image;
		this.quantity = quantity;
		this.discount = discount;
		this.add_date = add_date;
		this.upd_date = upd_date;
		this.categoryName = categoryName;
		this.subCategoryName = subCategoryName;
		this.stateName = stateName;
		this.sellerId = sellerId;
		this.brand = brand;
		this.size = size;
		this.color = color;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public LocalDate getAdd_date() {
		return add_date;
	}

	public void setAdd_date(LocalDate add_date) {
		this.add_date = add_date;
	}

	public LocalDate getUpd_date() {
		return upd_date;
	}

	public void setUpd_date(LocalDate upd_date) {
		this.upd_date = upd_date;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getSubCategoryName() {
		return subCategoryName;
	}

	public void setSubCategoryName(String subCategoryName) {
		this.subCategoryName = subCategoryName;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public String getSellerId() {
		return sellerId;
	}

	public void setSellerId(String sellerId) {
		this.sellerId = sellerId;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	

}