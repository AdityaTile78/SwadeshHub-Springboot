package com.swadeshi.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swadeshi.app.dto.UserDTO;
import com.swadeshi.app.exceptions.UserServiceException;
import com.swadeshi.app.model.User;
import com.swadeshi.app.services.auth.AuthService;


@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> createUser(@RequestBody User user) {
        try {
            User createdUser = authService.createUser(user);
            UserDTO userDTO = new UserDTO();
            userDTO.setStatus(true);
            userDTO.setEmail(createdUser.getEmail());
            userDTO.setId(createdUser.getId());
            userDTO.setMessage("User created successfully");
            return ResponseEntity.ok(userDTO);
        } catch (UserServiceException e) {
            UserDTO userDTO = new UserDTO();
            userDTO.setStatus(false);
            userDTO.setMessage("Failed to create user");
            return ResponseEntity.status(400).body(userDTO);
        }
    }

    @GetMapping()
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = authService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        try {
            User user = authService.getUserById(id);
            return ResponseEntity.ok(user);
        } catch (UserServiceException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody User user) {
        try {
            User updatedUser = authService.updateUser(id, user);
            UserDTO userDTO = new UserDTO();
            userDTO.setStatus(true);
            userDTO.setEmail(updatedUser.getEmail());
            userDTO.setId(updatedUser.getId());
            userDTO.setMessage("User updated successfully");
            return ResponseEntity.ok(userDTO);
        } catch (UserServiceException e) {
            UserDTO userDTO = new UserDTO();
            userDTO.setStatus(false);
            userDTO.setMessage("Failed to update user");
            return ResponseEntity.status(400).body(userDTO);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<UserDTO> deleteUser(@PathVariable Long id) {
        try {
            User deletedUser = authService.deleteUser(id);
            UserDTO userDTO = new UserDTO();
            userDTO.setStatus(true);
            userDTO.setEmail(deletedUser.getEmail());
            userDTO.setId(deletedUser.getId());
            userDTO.setMessage("User deleted successfully");
            return ResponseEntity.ok(userDTO);
        } catch (UserServiceException e) {
            UserDTO userDTO = new UserDTO();
            userDTO.setStatus(false);
            userDTO.setMessage("Failed to delete user");
            return ResponseEntity.status(400).body(userDTO);
        }
    }
}