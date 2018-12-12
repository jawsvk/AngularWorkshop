import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'starwarsguide';
  list: Object;

 
  
  categories: string [] = ['people', 'films', 'species', 'starships', 'vehicles', 'planets'];
  constructor(private data: DataService) {}

  ngOnInit() {
   
   this.data.getList().subscribe(
     data => {this.list = data},
    err => console.error(err),
    () => console.log('done loading menu items')
   
   );

  // console.log(JSON.stringify(this.list));

}


getList(k: string ) {

  console.log('is me ' + k);
}

generateArray(obj){
  return Object.keys(obj).map((key)=>{ return {key:key, value:obj[key]}});
}
}
