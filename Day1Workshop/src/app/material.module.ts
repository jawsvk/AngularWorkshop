import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



const MODULES = [
    MatToolbarModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    MatIconModule, MatCardModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class MaterialModule { }
