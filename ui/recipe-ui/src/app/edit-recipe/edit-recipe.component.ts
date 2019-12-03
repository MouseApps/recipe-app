import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RecipeDTO } from '../model/recipe-dto';
import { RecipeService } from '../services/recipe.service';
import { AlertService } from '../shared/services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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


  /**
   * new ingredient
   */
  public newIngredient: String;

  /**
   * new direction
   */
  public newDirection: String;

    /**
   * new tag
   */
  public newTag: String;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;



  constructor(public dialogRef: MatDialogRef<EditRecipeComponent, RecipeDTO | boolean>,
    @Inject(MAT_DIALOG_DATA) private recipeIn: RecipeDTO, private rs: RecipeService, private as: AlertService, private fb: FormBuilder) { }

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

    this.firstFormGroup = this.fb.group({
      name: [this.recipe.name, Validators.required],
      newTag: [this.newTag]
    });
    this.secondFormGroup = this.fb.group({
      newIngredient: [this.newIngredient]
    });
    this.thirdFormGroup = this.fb.group({
      newDirection: [this.newDirection]
    });

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
    this.recipe.name = this.firstFormGroup.controls.name.value;
    this.rs.saveRecipe(this.getRecipe()).subscribe(r => {
      this.dialogRef.close(r);
    }, err => {
      this.as.openDialog({title: 'Unable to save', content: err});
    });
  }

  public deleteRecipe(): void {
    this.rs.deleteRecipe(this.recipe).subscribe(() => {
      this.dialogRef.close(true);
    })
  }

}
