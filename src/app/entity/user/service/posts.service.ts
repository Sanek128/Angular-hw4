import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }
      getPostsByUserId(id: number): Observable <any[]> {
        return this.httpClient.get <any[]> (`http://jsonplaceholder.typicode.com/posts?userId=${id}`); 
      }
}
