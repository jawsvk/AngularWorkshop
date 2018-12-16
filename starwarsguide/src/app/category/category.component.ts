import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: string [] = ['characters', 'films', 'planets'];
  categoryname: string;
  constructor(private data: DataService, private route: ActivatedRoute ) { }




  ngOnInit() {
    this.route.params.subscribe( params => this.categoryname = this.route.snapshot.params['category']);
  }

}
