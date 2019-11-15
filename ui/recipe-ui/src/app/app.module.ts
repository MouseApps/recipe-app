import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatGridListModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HomeNavComponent } from './home-nav/home-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { FlexLayoutModule } from "@angular/flex-layout";
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeLandingComponent } from './recipe-landing/recipe-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
