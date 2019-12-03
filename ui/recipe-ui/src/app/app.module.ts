import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatCardModule, MatDialogModule, MatFormFieldModule,
  MatInputModule, MatChipsModule, MatSnackBarModule, MatStepperModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeLandingComponent } from './recipe-landing/recipe-landing.component';
import { MainComponent } from './main/main.component';
import { RecipeService } from './services/recipe.service';
import { HttpService } from './shared/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './shared/component/dialog/dialog.component';
import { SafePipe } from './shared/pipe/safe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

/**
 * imports for angular app
 */
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeLandingComponent,
    DialogComponent,
    SafePipe,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  providers: [RecipeService, HttpService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, EditRecipeComponent]
})
export class AppModule { }
