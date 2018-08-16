import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


export interface ImageData {
  url: string;
  title: string;

}

@Injectable()
export class GifService {
  constructor(private http: HttpClient) { }

  getImages(content) {
    const qs = new HttpParams()
      .set('q', content)
      .set('lang', 'en')
      .set('limit', '50')
      .set('api_key', '4wy49BD8A8ioKmMg2SJLGrIvPGh29zHP');

    return (
      this.http.get<ImageData[]>('http://api.giphy.com/v1/gifs/search', { params: qs })
      .toPromise()
      .then((result) => {
        const k: ImageData[] = [];
        for ( const i of result['data']) {
          k.push ({
            url: i.images.fixed_width.url,
           title: i.title
          });
        }
        return (k);

      })
    );
  }

}
