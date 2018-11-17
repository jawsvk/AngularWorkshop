import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getListItems(content)
  {
    const qs = new HttpParams()
      .set('q', content);

      return(
        this.http.get<string[]>('https://swapi.co/api', {params: qs})
        .toPromise()
        .then((result) => {
          const k: string[] = [];


        })
      );
  }

}
