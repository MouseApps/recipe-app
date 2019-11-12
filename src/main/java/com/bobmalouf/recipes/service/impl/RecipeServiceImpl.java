/**
 * 
 */
package com.bobmalouf.recipes.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bobmalouf.recipes.model.Recipe;
import com.bobmalouf.recipes.repository.RecipeRepository;
import com.bobmalouf.recipes.service.RecipeService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * @author bmalouf
 *
 */
@Service
public class RecipeServiceImpl implements RecipeService {
	
	private final RecipeRepository rr;
	
	@Autowired
	public RecipeServiceImpl(final RecipeRepository rrIn) {
		this.rr = rrIn;
	}

	public Flux<Recipe> getRecipes() {
		return this.rr.findAll();
	}
	
	public Mono<Recipe> getRecipe(final String idIn) {
		return this.rr.findById(idIn);
	}

	public Mono<Recipe> createRecipe(final Recipe r) throws Exception {
		Mono<Recipe> temp = this.getRecipe(r.getTitle());
		
		if(temp != null) {
			throw new Exception("already exists");
		}
		return this.rr.save(r);
	}

	@Override
	public Mono<Recipe> updateRecipe(Recipe r) throws Exception {
		Mono<Recipe> temp = this.getRecipe(r.getTitle());
		
		if(temp == null) {
			throw new Exception("doenst exist");
		}
		return this.rr.save(r);
	}

	@Override
	public boolean deleteRecipe(String idIn) {
		this.rr.deleteById(idIn);
		return true;
	}
	

}
