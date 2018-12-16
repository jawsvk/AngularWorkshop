import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
    {
        path: '',
        component: SidebarComponent
      },
      {
        path: 'home',
        component: SidebarComponent
      },

      {
        path: ':category',
        component: CategoryComponent
      },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

