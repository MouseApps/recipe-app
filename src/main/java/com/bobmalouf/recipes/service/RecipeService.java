/**
 * 
 */
package com.bobmalouf.recipes.service;


import com.bobmalouf.recipes.model.Recipe;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


/**
 * @author bmalouf
 *
 */
public interface RecipeService {
	
	Flux<Recipe> getRecipes();
	
	Mono<Recipe> getRecipe(final String idIn);
	
	Mono<Recipe> createRecipe(final Recipe r) throws Exception;
	
	Mono<Recipe> updateRecipe(final Recipe r) throws Exception;
	
	boolean deleteRecipe(final String idIn);




}
