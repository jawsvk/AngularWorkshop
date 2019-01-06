import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface ItemData {
  url: string;
  title: string;

}


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
          const k: ItemData[] = [];
          var label: string;
          for(const i of result['results']) {
            if(i.name != null){
              label = i.name;
            }
            else { label = i.title};

            k.push({
              url: i.url,
              title: label
            });

          }

          return (k);
        })
      );
  }

  getList() {
    return(this.http.get('https://swapi.co/api/?format=json'));

  }

}
