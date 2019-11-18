/**
 * 
 */
package com.bobmalouf.recipes.service;


import java.util.List;
import java.util.NoSuchElementException;

import com.bobmalouf.recipes.model.Recipe;


/**
 * @author bmalouf
 *
 */
public interface RecipeService {
	
	List<Recipe> getRecipes();
	
	Recipe getRecipe(final String idIn);
	
	Recipe createRecipe(final Recipe r);
	
	Recipe updateRecipe(final Recipe r) throws NoSuchElementException;
	
	boolean deleteRecipe(final String idIn);




}
