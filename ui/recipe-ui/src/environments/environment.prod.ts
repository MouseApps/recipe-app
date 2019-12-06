export const environment = {
  production: true,
  apiConfig: {
    restURI: '/api',
    serviceEndpoints: {
      recipeService: {
        getRecipe: '/recipes',
        getRecipes: '/recipes'
      }
    }
  }
};
