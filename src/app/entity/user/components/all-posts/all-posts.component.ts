import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/entity/post/service/post.service';
import { Post } from 'src/app/models/Post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  post: Post[]

  constructor(private activatedRoute: ActivatedRoute,
              private postsService: PostsService
    ) {
    this.activatedRoute.queryParams.subscribe(value => {
      console.log(value);
      this.postsService.getPostsByUserId(value.id).subscribe(value => {
        console.log(value);
        this.post = value;
      });
    });
  }

  ngOnInit(): void {
  }

}
