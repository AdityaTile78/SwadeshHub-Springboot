package com.swadeshi.app.dto;

public class SellerDTO {

    private String gstNo;
    private String username;
    private String password;
    private String companyName;
    private String ownerName;
    private String city;
    private String state;
    private String pincode;
    private String category;
    private String accountNo;
    private String bankName;
    private String ifscCode;
    private String status;
    
	public SellerDTO() {
		
	}

	public SellerDTO(String gstNo, String username, String password, String companyName, String ownerName, String city,
			String state, String pincode, String category, String accountNo, String bankName, String ifscCode,
			String status) {
		super();
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
		this.status = status;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
    
}
