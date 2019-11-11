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

}
