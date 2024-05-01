package com.swadeshi.app.dto;



import lombok.Data;

@Data
public class AuthenticationDTO {

    private String email;

    private String password;
    
    private  int role;

	public int getRole() {
		return role;
	}

	public void setRole(int role) {
		this.role = role;
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
