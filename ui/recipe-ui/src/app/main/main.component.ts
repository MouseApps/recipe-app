import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { RecipeDTO } from '../model/recipe-dto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog) {}

  /**
   * opens new modal to add a new 
   * recipe
   */
  public addRecipe(): void {
    this.dialog.open<EditRecipeComponent, any, RecipeDTO>(EditRecipeComponent);
  }

}
