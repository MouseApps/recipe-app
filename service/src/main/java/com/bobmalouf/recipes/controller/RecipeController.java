/**
 * 
 */
package com.bobmalouf.recipes.controller;

import java.util.List;

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
	private List<Recipe> getAllRecipes(){
		return this.rs.getRecipes();
	}
	
	@GetMapping("/recipes/{id}")
	private Recipe getRecipeByName(@PathVariable("id") final String id){
		return this.rs.getRecipe(id);
	}
	
	@PostMapping("/recipes")
	private Recipe createRecipe(@RequestBody final Recipe r) throws Exception{
		return this.rs.createRecipe(r);
	}

	@PutMapping("/recipes")
	private Recipe updateRecipe(@RequestBody final Recipe r) throws Exception{
		return this.rs.updateRecipe(r);
	}
	
	@DeleteMapping("/recipes/{id}")
	private boolean deleteRecipe(@PathVariable("id") final String id){
		return this.rs.deleteRecipe(id);
	}
	
}
