package com.swadeshi.app.controller;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.swadeshi.app.dto.AuthenticationDTO;
import com.swadeshi.app.dto.AuthenticationResponse;
import com.swadeshi.app.model.User;
import com.swadeshi.app.repositories.UserRepository2;
import com.swadeshi.app.services.jwt.UserDetailsServiceImpl;
import com.swadeshi.app.services.util.JwtUtil;

import java.io.IOException;

@RestController
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private UserRepository2 userRepository;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @PostMapping("/api/authenticate")
    public AuthenticationResponse createAuthenticationToken(@RequestBody AuthenticationDTO authenticationDTO, HttpServletResponse response) throws BadCredentialsException, DisabledException, UsernameNotFoundException, IOException {
        try {
        	authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationDTO.getEmail(), authenticationDTO.getPassword()));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Incorrect username or password!");
        } catch (DisabledException disabledException) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND, "User is not activated");
            return null;
        }


        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationDTO.getEmail());

        final String jwt = jwtUtil.generateToken(userDetails.getUsername());
        
        User user=userRepository.findFirstByEmail(userDetails.getUsername());

        return new AuthenticationResponse(user.getId(),userDetails.getUsername(),jwt,user.getRole(),user.getSellerid());

    }

}
