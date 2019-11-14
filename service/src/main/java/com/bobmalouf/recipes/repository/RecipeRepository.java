package com.bobmalouf.recipes.repository;

import org.springframework.cloud.gcp.data.firestore.FirestoreReactiveRepository;

import com.bobmalouf.recipes.model.Recipe;

public interface RecipeRepository extends FirestoreReactiveRepository<Recipe>{

}
