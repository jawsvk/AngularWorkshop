import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {AppComponent} from './app.component';
import {CategoryComponent} from './category/category.component';

const routes : Routes = [
    {
        path: '',
        component: AppComponent
      },
        
    {
        path: ':category',
        component: CategoryComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

