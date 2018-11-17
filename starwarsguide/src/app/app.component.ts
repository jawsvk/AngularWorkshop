import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'starwarsguide';
  categories: string [] = ['people', 'films', 'species', 'starships', 'vehicles', 'planets'];

getList(k: string ) {

  console.log('is me ' + k);
}
}
