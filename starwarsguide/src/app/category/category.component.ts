import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private data: DataService) { }
  categories: string [] = ['characters', 'films', 'planets'];


  ngOnInit() {
  }

}
