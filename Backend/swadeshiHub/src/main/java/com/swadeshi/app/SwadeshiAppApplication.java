package com.swadeshi.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan("com.swadeshi.app")
@SpringBootApplication
public class SwadeshiAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SwadeshiAppApplication.class, args);
	}

}
