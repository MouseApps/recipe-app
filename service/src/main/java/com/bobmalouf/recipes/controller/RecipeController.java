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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bobmalouf.recipes.dto.RecipeDTO;
import com.bobmalouf.recipes.service.RecipeService;

/**
 * @author bmalouf
 *
 */
@RestController
@RequestMapping("recipes")
public class RecipeController {
	
	private final RecipeService rs;
	
	@Autowired
	public RecipeController(final RecipeService rsIn) {
		this.rs = rsIn;
	}
	
	@GetMapping
	private List<RecipeDTO> getAllRecipes(){
		return this.rs.getRecipes();
	}
	
	@GetMapping("{id}")
	private RecipeDTO getRecipeByName(@PathVariable("id") final String id){
		return this.rs.getRecipe(id);
	}
	
	@PostMapping
	private RecipeDTO createRecipe(@RequestBody final RecipeDTO r) throws Exception{
		return this.rs.createRecipe(r);
	}

	@PutMapping
	private RecipeDTO updateRecipe(@RequestBody final RecipeDTO r) throws Exception{
		return this.rs.updateRecipe(r);
	}
	
	@DeleteMapping("{id}")
	private boolean deleteRecipe(@PathVariable("id") final String id){
		return this.rs.deleteRecipe(id);
	}
	
}
