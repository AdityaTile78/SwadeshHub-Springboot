//package com.swadeshi.app.services.auth;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//import com.swadeshi.app.exceptions.UserServiceException;
//import com.swadeshi.app.model.User;
//import com.swadeshi.app.repositories.UserRepository;
//
//public class AuthService2 {
//
//    @Autowired
//    private UserRepository userRepository;
//    
//    public User createUser(User user) {
//    		
//    		Optional<User> isuser = userRepository.findFirstByEmail(user.getEmail());
//		if(isuser.isEmpty()) {
//			user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
//			User savedUser = userRepository.save(user);
//			return savedUser;
//		}
//		else
//			throw new UserServiceException("User already registered!");
//    }
//}


//package com.swadeshi.app.services.auth;
//
//import com.swadeshi.app.dto.SignupDTO;
//import com.swadeshi.app.dto.UserDTO;
//
//public interface AuthService {
//    UserDTO createUser(SignupDTO signupDTO);
