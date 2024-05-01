package com.swadeshi.app.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.swadeshi.app.dto.PaymentLinkResponse;
import com.swadeshi.app.dto.PaymentRequestDTO;
import com.swadeshi.app.model.User;
import com.swadeshi.app.services.auth.AuthService;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;

@RestController
@RequestMapping("/api/products")
public class PaymentController {
    
    @Autowired
    private AuthService authService;

    @PostMapping("/payments")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(@RequestBody PaymentRequestDTO paymentreqiuest) throws RazorpayException {
        Long userId = paymentreqiuest.getUserId();
        int totalAmount = paymentreqiuest.getTotalAmount();
        
        User user = authService.getUserById(userId);
        try {
            RazorpayClient razorpay = new RazorpayClient("rzp_test_1gpJJoIcng5ogt", "2EfZzlT8kFEJGTVVWfDfyZB5");

            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount", totalAmount * 100);
            paymentLinkRequest.put("currency", "INR");

            JSONObject customer = new JSONObject();
            customer.put("name", user.getFirstName() + " " + user.getLastName());
            customer.put("contact", user.getMobile());
            customer.put("email", user.getEmail());
            paymentLinkRequest.put("customer", customer);

            JSONObject notify = new JSONObject();
            notify.put("sms", true);
            notify.put("email", true);
            paymentLinkRequest.put("notify", notify);

            paymentLinkRequest.put("reminder_enable", true);
            
            paymentLinkRequest.put("callback_url","http://localhost:3000/ordersuccess");
		    paymentLinkRequest.put("callback_method","get");

            PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);

            String paymentLinkId = payment.get("id");
            String paymentLinkUrl = payment.get("short_url");

            PaymentLinkResponse res = new PaymentLinkResponse(paymentLinkUrl, paymentLinkId);

            System.out.println("Payment link ID: " + paymentLinkId);
            System.out.println("Payment link URL: " + paymentLinkUrl);

            return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
        } catch (RazorpayException e) {
            System.out.println("Error creating payment link: " + e.getMessage());
            throw new RazorpayException(e.getMessage());
        }
    }
}
