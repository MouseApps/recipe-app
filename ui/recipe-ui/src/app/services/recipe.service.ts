import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RecipeDTO } from '../model/recipe-dto';
import { HttpService } from '../shared/services/http.service';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';

/**
 * gets recipes
 */
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  /**
   * subject
   */
  private subj = new Subject<RecipeDTO[]>();


  constructor(private http: HttpService) { }

  /**
   * gets all recipes
   */
  public getRecipes(): Subject<RecipeDTO[]> {
    this.getRecipesFromService();
    return this.subj;
  }



  /**
   * gets all recipes
   */
  private getRecipesFromService(): void {

    this.http.get<RecipeDTO[]>(environment.apiConfig.serviceEndpoints.recipeService.getRecipes).subscribe(a => {
      this.subj.next(a.map(b => Object.assign(new RecipeDTO(), b as RecipeDTO)));
    });

  }

  /**
   * gets a recipe by id
   */
  public getRecipe(id: string): Observable<RecipeDTO> {
    return this.http.get<RecipeDTO>(environment.apiConfig.serviceEndpoints.recipeService.getRecipe + '/' + id)
    .pipe(map(a => Object.assign(new RecipeDTO(), a as RecipeDTO)));
  }

  /**
   * saves a recipe
   * @param recipe recipe to save
   */
  public saveRecipe(recipe: RecipeDTO): Observable<RecipeDTO> {
    let obs: Observable<RecipeDTO>;
    if (recipe.id) {
      obs =  this.updateRecipe(recipe);
    } else {
      obs =  this.saveNewRecipe(recipe);
    }
    return obs.pipe(
    tap(() => this.getRecipesFromService()), map(a => Object.assign(new RecipeDTO(), a as RecipeDTO)));

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

  /**
   * deletes a recipe
   * @param recipe recipe to save
   */
  public deleteRecipe(recipe: RecipeDTO): Observable<boolean> {
    return this.http.delete<boolean>(environment.apiConfig.serviceEndpoints.recipeService.getRecipe + '/' + recipe.id).pipe(
      tap(() => this.getRecipesFromService()));
  }
}
