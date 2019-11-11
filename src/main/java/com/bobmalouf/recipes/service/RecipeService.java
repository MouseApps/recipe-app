/**
 * 
 */
package com.bobmalouf.recipes.service;


import com.bobmalouf.recipes.model.Recipe;

import reactor.core.publisher.Flux;


/**
 * @author bmalouf
 *
 */
public interface RecipeService {
	
	Flux<Recipe> getRecipes();

}
