package com.swadeshi.app.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "seller")
public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sId;

    @Column(name = "GST_no")
    private String gstNo;

    @Column(name = "s_username")
    private String username;

    @Column(name = "s_password")
    private String password;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "owner_name")
    private String ownerName;

    @Column(name = "s_city")
    private String city;

    @Column(name = "s_state")
    private String state;

    @Column(name = "pincode")
    private String pincode;

    @Column(name = "category")
    private String category;

    @Column(name = "Account_no")
    private String accountNo;

    @Column(name = "Bank_name")
    private String bankName;

    @Column(name = "IFSC_code")
    private String ifscCode;

    @Column(name = "add_date")
    private Date addDate;

    @Column(name = "upd_date")
    private Date updDate;

    @Column(name = "status")
    private String status;

	public Seller() {
		
	}

	public Seller(Long sId, String gstNo, String username, String password, String companyName, String ownerName,
			String city, String state, String pincode, String category, String accountNo, String bankName,
			String ifscCode, Date addDate, Date updDate, String status) {
		super();
		this.sId = sId;
		this.gstNo = gstNo;
		this.username = username;
		this.password = password;
		this.companyName = companyName;
		this.ownerName = ownerName;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.category = category;
		this.accountNo = accountNo;
		this.bankName = bankName;
		this.ifscCode = ifscCode;
		this.addDate = addDate;
		this.updDate = updDate;
		this.status = status;
	}

	public Long getsId() {
		return sId;
	}

	public void setsId(Long sId) {
		this.sId = sId;
	}

	public String getGstNo() {
		return gstNo;
	}

	public void setGstNo(String gstNo) {
		this.gstNo = gstNo;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public Date getAddDate() {
		return addDate;
	}

	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}

	public Date getUpdDate() {
		return updDate;
	}

	public void setUpdDate(Date updDate) {
		this.updDate = updDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	

    
}