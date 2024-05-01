package com.swadeshi.app.dto;

public class PaymentRresponseDTO {

    private String paymentId;
    
    private String paymentMode;

	public PaymentRresponseDTO(String paymentId, String paymentMode) {
		super();
		this.paymentId = paymentId;
		this.paymentMode = paymentMode;
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
