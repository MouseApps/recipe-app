/**
 * 
 */
package com.bobmalouf.recipes.service.impl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import com.bobmalouf.recipes.model.Recipe;
import com.bobmalouf.recipes.service.RecipeService;
import com.bobmalouf.recipes.util.RecipeDynamoDbClient;

/**
 * @author bmalouf
 *
 */
@Service
public class RecipeServiceImpl implements RecipeService {

	private final RecipeDynamoDbClient<Recipe> db;

	public RecipeServiceImpl() {
		this.db = new RecipeDynamoDbClient<Recipe>(Recipe.class);
	}

	public List<Recipe> getRecipes() {
		return this.db.findAll();
	}

	public Recipe getRecipe(final String idIn) throws NoSuchElementException {
		return this.db.findById(idIn);
	}

	public Recipe createRecipe(final Recipe r) {
		return this.db.create(r);
	}

	public Recipe updateRecipe(final Recipe r) {
		return this.db.update(r);
	}

	@Override
	public boolean deleteRecipe(final String idIn) {
		return this.db.delete(idIn);
	}


}
