import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeLandingComponent } from './recipe-landing/recipe-landing.component';


const routes: Routes = [

{
  path: '',
  component: RecipeLandingComponent,
},

    {
      path: 'list',
      component: RecipeListComponent,
      children: [

        {
          path: ':id',
          component: RecipeDetailComponent
        }
      ]
    }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
