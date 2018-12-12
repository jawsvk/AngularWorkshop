import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import {DataService} from './data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
