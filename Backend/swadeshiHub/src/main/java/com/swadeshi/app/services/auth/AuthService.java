package com.swadeshi.app.services.auth;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.swadeshi.app.exceptions.UserServiceException;
import com.swadeshi.app.model.User;
import com.swadeshi.app.repositories.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        Optional<User> isUser = userRepository.findFirstByEmail(user.getEmail());
        if (isUser.isEmpty()) {
            user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
            user.setAdd_Date(LocalDateTime.now());
            user.setUpdated_Date(LocalDateTime.now());
            User savedUser = userRepository.save(user);
            return savedUser;
        } else {
            throw new UserServiceException("User already registered!");
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserServiceException("User not found with id: " + id));
    }

    public User updateUser(Long id, User updatedUser) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new UserServiceException("User not found with id: " + id));

        // Update the fields you want to allow users to modify
        existingUser.setFirstName(updatedUser.getFirstName());
        existingUser.setLastName(updatedUser.getLastName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setMobile(updatedUser.getMobile());
        existingUser.setGender(updatedUser.getGender());
        // ... other fields

        existingUser.setUpdated_Date(LocalDateTime.now());

        return userRepository.save(existingUser);
    }

    public User deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserServiceException("User not found with id: " + id));

        userRepository.delete(user);

        return user;
    }
}