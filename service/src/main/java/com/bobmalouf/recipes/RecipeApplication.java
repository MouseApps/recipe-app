/**
 * 
 */
package com.bobmalouf.recipes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * @author bmalouf
 *
 */
@SpringBootApplication
public class RecipeApplication extends SpringBootServletInitializer{

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(RecipeApplication.class, args);

	}

}
