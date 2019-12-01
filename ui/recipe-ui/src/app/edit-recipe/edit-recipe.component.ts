import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecipeDTO } from '../model/recipe-dto';
import { RecipeService } from '../services/recipe.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  /**
   * holds the recipe for the things
   */
  private recipe: RecipeDTO;

  /**
   * says if its in new mode
   */
  public isNew: boolean;

  constructor(public dialogRef: MatDialogRef<EditRecipeComponent, RecipeDTO>,
    @Inject(MAT_DIALOG_DATA) private recipeIn: RecipeDTO, private rs: RecipeService, private as: AlertService) { }

  /**
   * called on init
   */
  ngOnInit() {

    if (this.recipeIn) {
      this.recipe = this.recipeIn;
    } else {
      this.isNew = true;
      this.recipe = new RecipeDTO();
    }
  }
  /**
   * gets the recipe
   */
  public getRecipe(): RecipeDTO {
    return this.recipe;
  }

  /**
   * saves
   */
  public saveRecipe(): void {
    this.rs.saveRecipe(this.getRecipe()).subscribe(r => {
      this.dialogRef.close(r);
    }, err => {
      this.as.openDialog({title: 'Unable to save', content: err});
    });
  }

}
