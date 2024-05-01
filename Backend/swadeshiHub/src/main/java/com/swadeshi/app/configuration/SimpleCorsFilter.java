package com.swadeshi.app.configuration;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


	@Component
	@Order(Ordered.HIGHEST_PRECEDENCE)
	public class SimpleCorsFilter implements Filter {

		 @Override
		    public void doFilter(ServletRequest servletRequest, 
		                         ServletResponse servletResponse, 
		                         FilterChain filterChain) 
		        throws IOException, ServletException{ 
		  
		        System.out.println("This is a Servlet doFilter() Method !"); 
		  
		        // Get remote data 
		        System.out.println("Remote Host : "+ servletRequest.getRemoteHost()); 
		        System.out.println("Remote Address : "+ servletRequest.getRemoteAddr()); 
		  
		        // Invoke filterChain to execute the next filter inorder. 
		        filterChain.doFilter(servletRequest,servletResponse); 
		    } 
		}