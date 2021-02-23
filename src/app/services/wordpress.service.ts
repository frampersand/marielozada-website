import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://marielozada.cf/wp/wp-json/wp/v2/posts', {
      params: {
        categories: '4'
      }
    });
  }

  getPostInfo(id): Observable<any[]> {
    return this.http.get<any>('https://marielozada.cf/wp/wp-json/wp/v2/posts/'+id, {
    });
  }
}
