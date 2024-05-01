//package com.swadeshi.app.services.auth;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.swadeshi.app.dto.SignupDTO;
//import com.swadeshi.app.dto.UserDTO;
//import com.swadeshi.app.model.User;
//import com.swadeshi.app.repositories.UserRepository;
//
//@Service
//public class AuthServiceImpl implements AuthService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDTO createUser(SignupDTO signupDTO) {
//        User user = new User();
//        
//        user.setLastName(signupDTO.getLastName());
//        user.setEmail(signupDTO.getEmail());
//        user.setMobile(signupDTO.getMobile());
//        user.setPassword(new BCryptPasswordEncoder().encode(signupDTO.getPassword()));
//        User createdUser = userRepository.save(user);
//        UserDTO userDTO = new UserDTO();
//        userDTO.setId(createdUser.getId());
//        userDTO.setEmail(createdUser.getEmail());
//        
//        return userDTO;
//    }
//}
