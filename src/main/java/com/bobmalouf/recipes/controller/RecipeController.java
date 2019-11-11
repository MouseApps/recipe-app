/**
 * 
 */
package com.bobmalouf.recipes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bobmalouf.recipes.model.Recipe;
import com.bobmalouf.recipes.service.RecipeService;

import reactor.core.publisher.Flux;

/**
 * @author bmalouf
 *
 */
@RestController
public class RecipeController {
	
	private final RecipeService rs;
	
	@Autowired
	public RecipeController(final RecipeService rsIn) {
		this.rs = rsIn;
	}
	
	@GetMapping("/recipes")
	private Flux<Recipe> getAllRecipes(){
		return this.rs.getRecipes();
	}

}
