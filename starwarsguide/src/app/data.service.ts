import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {


  constructor(private http: HttpClient) {}

  getListItems(content) {
   /*  const qs = new HttpParams()
      .set('q', content); */
      console.log('getting list items for ' + content);
      return(
        this.http.get<string[]>('https://swapi.co/api/'+ content)
        .toPromise()
        .then((result) => {
          const k: string[] = [];
          for(const i of result['results']) {
            k.push(i.name);

          }

          return (k);
        })
      );
  }

  getList() {
    return(this.http.get('https://swapi.co/api/?format=json'));

  }

}
