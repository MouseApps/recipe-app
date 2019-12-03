import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { RecipeDTO } from '../model/recipe-dto';
import { Router } from '@angular/router';

/**
 * main component
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  /**
   * sees if it's a handset
   */
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog,
              private snackBar: MatSnackBar, private router: Router) { }

  /**
   * opens new modal to add a new
   * recipe
   */
  public addRecipe(): void {
    this.dialog.open<EditRecipeComponent, any, RecipeDTO>(EditRecipeComponent, { minWidth: 600 }).afterClosed().subscribe(newRecipe => {

      if (newRecipe instanceof RecipeDTO) {
        this.snackBar.open(newRecipe.name + ' created!', 'close', { duration: 3000 });
        this.router.navigate(['list', newRecipe.id]);
      }
      // insert trigger change in child component for list
    });
  }

}
