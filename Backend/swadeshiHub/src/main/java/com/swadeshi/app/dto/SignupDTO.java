package com.swadeshi.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Data;

@Data
public class SignupDTO {

   

    private String email;

    private String password;
    
    private String firstName;
    
    private String lastName;
    
    private LocalDateTime Add_Date ;
    
    private LocalDateTime Updated_Date ;
    
    private String mobile;
   
    
    

	public LocalDateTime getAdd_Date() {
		return Add_Date;
	}

	public void setAdd_Date(LocalDateTime add_Date) {
		Add_Date = add_Date;
	}

	public LocalDateTime getUpdated_Date() {
		return Updated_Date;
	}

	public void setUpdated_Date(LocalDateTime updated_Date) {
		Updated_Date = updated_Date;
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

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}