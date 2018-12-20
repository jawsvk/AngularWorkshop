import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  results: string[];
  categoryname: string;
  currentUrl:string;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router  ) { 
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url
    );
  }



  ngOnInit() {
    this.route.params.subscribe( params => this.categoryname = this.route.snapshot.params['category']);
    this.data.getListItems(this.categoryname).then((result: string[]) => {
    this.results = result;
    console.log(this.results);

    }).catch(err => {
      console.error('>>> error:', err);
    });
  }

}
