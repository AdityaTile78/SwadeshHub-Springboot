//package com.swadeshi.app.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.swadeshi.app.dto.UserDTO;
//import com.swadeshi.app.exceptions.UserServiceException;
//import com.swadeshi.app.model.User;
//import com.swadeshi.app.services.auth.AuthService2;
//
//@RestController
//@CrossOrigin
//public class UserController2 {
//	
//	@Autowired
//	private AuthService2 authService;
//	
//	@PostMapping("/register")
//	public UserDTO register(@RequestBody User user) {
//	try {
//			User createdUser=authService.createUser(user);
//			
//			UserDTO userDTO= new UserDTO();
//			
//			userDTO.setStatus(true);
//			userDTO.setEmail(createdUser.getEmail());
//			userDTO.setId(createdUser.getId());
//			userDTO.setMessage("User created successfully");
//			return userDTO;
//	}
//	catch(UserServiceException e) {
//		
//		UserDTO userDTO= new UserDTO();
//		userDTO.setStatus(false);
//		userDTO.setMessage("User Already registered");
//		return userDTO;
//		
//	}
//	
//	}
//
//}
//
//package com.swadeshi.app.controller;
//
//import java.time.LocalDateTime;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.swadeshi.app.dto.SignupDTO;
//import com.swadeshi.app.dto.UserDTO;
//import com.swadeshi.app.services.auth.AuthService;
//
//@RestController
//@CrossOrigin
//public class UserController {
//	 @Autowired
//	    private AuthService authService;
//
//	    @PostMapping("/sign-up")
//	    public ResponseEntity<?> signupUser(@RequestBody SignupDTO signupDTO) {
//	    	signupDTO.setAdd_Date(LocalDateTime.now());
//	    	signupDTO.setUpdated_Date(LocalDateTime.now());
//	    	System.out.println(signupDTO.getAdd_Date());
//	       UserDTO createdUser = authService.createUser(signupDTO);
//	       
//	       if (createdUser == null){
//	           return new ResponseEntity<>("User not created, come again later!", HttpStatus.BAD_REQUEST);
//	       }
//	       return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
//	    }
//}