import {NgModule} from '@angular/core';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';


const MODULES = [
  MatIconModule, MatButtonModule, MatExpansionModule, MatListModule, MatCardModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
