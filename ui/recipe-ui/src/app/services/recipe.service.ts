import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeDTO } from '../model/recipe-dto';
import { HttpService } from '../shared/services/http.service';
import { environment } from 'src/environments/environment';

/**
 * gets recipes
 */
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpService) { }

  /**
   * gets all recipes
   */
  public getRecipes(): Observable<RecipeDTO[]> {
    return this.http.get<RecipeDTO[]>(environment.apiConfig.serviceEndpoints.recipeService.getRecipes);
  }

  /**
   * gets a recipe by id
   */
  public getRecipe(id: string): Observable<RecipeDTO> {
    return this.http.get<RecipeDTO>(environment.apiConfig.serviceEndpoints.recipeService.getRecipe + '/' + id);
  }

  /**
   * saves a recipe
   * @param recipe recipe to save
   */
  public saveRecipe(recipe: RecipeDTO): Observable<RecipeDTO> {
    if (recipe.id) {
      console.warn('updating!!')
      return this.updateRecipe(recipe);
    } else {
      return this.saveNewRecipe(recipe);
    }
  }

  /**
   * saves a new recipe
   * @param recipe recipe to save
   */
  private saveNewRecipe(recipe: RecipeDTO): Observable<RecipeDTO> {
    return this.http.post<RecipeDTO>(environment.apiConfig.serviceEndpoints.recipeService.getRecipe, recipe);
  }

  /**
   * updates an existing recipe
   * @param recipe recipe to save
   */
  private updateRecipe(recipe: RecipeDTO): Observable<RecipeDTO> {
    return this.http.put<RecipeDTO>(environment.apiConfig.serviceEndpoints.recipeService.getRecipe, recipe);
  }
}
