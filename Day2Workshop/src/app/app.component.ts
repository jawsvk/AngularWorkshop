import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {GifService} from './gif.service';
import {ImageData} from './gif.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day2Workshop';
    @ViewChild('form') form: NgForm;
    images: ImageData[] = [];

      constructor(private http: HttpClient,
      private gifService: GifService) { }

    processForm() {
      console.log('content is', this.form.value.search);
      this.gifService.getImages(this.form.value.search)
      .then((result: ImageData[]) => {
        this.images = result;
        console.log(this.images);
      })
      .catch(err => {
        console.error('>>> error:', err);
      });

    }

}
