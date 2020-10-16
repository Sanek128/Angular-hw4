import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { Comment } from 'src/app/models/Comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable <Post[]> {
    return this.http.get <Post[]> ('https://jsonplaceholder.typicode.com/posts')
  }

}
