import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service'
import {Router, NavigationEnd} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'starwarsguide';
  currentUrl: string;
  list: Object = new Object();


  constructor(private data: DataService, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url
    );
  }

  ngOnInit() {
   
   this.data.getList().subscribe(
     data => {this.list = data},
    err => console.error(err),
    () => console.log('done loading menu items')
   
   );
   

}

getList(k: string ) {

  console.log('is me ' + k);
  this.router.navigate(['/'+ k])
}

generateArray(obj){
  return Object.keys(obj).map((key)=>{ return {key:key, value:obj[key]}});
}
}
