/**
 * 
 */
package com.bobmalouf.recipes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bobmalouf.recipes.model.Recipe;
import com.bobmalouf.recipes.service.RecipeService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

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
	
	@GetMapping("/recipes/{name}")
	private Mono<Recipe> getRecipeByName(@PathVariable("name") final String name){
		return this.rs.getRecipe(name);
	}
	
	@PostMapping("/recipes")
	private Mono<Recipe> createRecipe(@RequestBody final Recipe r) throws Exception{
		return this.rs.createRecipe(r);
	}

	@PutMapping("/recipes")
	private Mono<Recipe> updateRecipe(@RequestBody final Recipe r) throws Exception{
		return this.rs.updateRecipe(r);
	}
	
	@DeleteMapping("/recipes/{name}")
	private boolean deleteRecipe(@PathVariable("name") final String name){
		return this.rs.deleteRecipe(name);
	}
	
}
