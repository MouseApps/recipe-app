import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { RecipeDTO } from '../model/recipe-dto';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';

import * as lo from 'lodash';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rs: RecipeService, private dialog: MatDialog,
              private snackBar: MatSnackBar) {

    this.watcher = this.route.params;

    this.watcher.subscribe(a => {
      this.params = a;
      this.ngOnInit();
    });

   }

  /**
   * watcher for route changes
   */
  private watcher: Observable<Params>;

  /**
   * params
   */
  private params: Params;

  /**
   * recipe for the component;
   */
  private recipe: RecipeDTO;

  /**
   * calls on init and new route changes
   */
  ngOnInit() {
    this.recipe = null;
    this.rs.getRecipe(this.params.id).subscribe(recipe => {
      this.recipe = recipe;
    });
  }

  /**
   * gets the recipe for the template
   */
  public getRecipe(): RecipeDTO {
    return this.recipe;
  }

  /**
   * edits the current recipe
   */
  public editRecipe(): void {
    this.dialog.open<EditRecipeComponent, RecipeDTO, RecipeDTO>(EditRecipeComponent,
      {data: lo(this.getRecipe()).cloneDeep()}).afterClosed().subscribe(sub => {
      if (sub) {
        this.recipe = sub;
        this.snackBar.open(sub.name + ' updated!', 'close', {duration: 3000});
      }
    });
  }

}
