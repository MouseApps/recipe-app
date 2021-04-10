/**
 * 
 */
package com.bobmalouf.recipes.service;


import java.util.List;
import java.util.NoSuchElementException;

import com.bobmalouf.recipes.dto.RecipeDTO;


/**
 * @author bmalouf
 *
 */
public interface RecipeService {
	
	List<RecipeDTO> getRecipes();
	
	RecipeDTO getRecipe(final String idIn);
	
	RecipeDTO createRecipe(final RecipeDTO r);
	
	RecipeDTO updateRecipe(final RecipeDTO r) throws NoSuchElementException;
	
	boolean deleteRecipe(final String idIn);




}
