import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './entity/user/components/user/user.component';
import { RouterModule } from '@angular/router';
import { AllUsersComponent } from './entity/user/components/all-user/all-user.component';
import { UserResolveService } from './entity/user/service/user-resolve.service';
import { PostComponent } from './entity/post/components/post/post/post.component';
import { AllPostComponent } from './entity/post/components/all-post/all-post/all-post.component';
import { PostResolveService } from './entity/post/service/post-resolve.service';
import { CommentComponent } from './entity/comment/components/comment/comment/comment.component';
import { AllCommentComponent } from './entity/comment/components/all-comment/all-comment/all-comment.component';
import { CommentResolveService } from './entity/comment/service/comment-resolve.service';
import { UserDetailsComponent } from './entity/user/components/user-details/user-details.component';
import { UserDetailsTwoComponent } from './entity/user/components/user-details-two/user-details-two.component';
import { UserDetailsThreeComponent } from './entity/user/components/user-details-three/user-details-three.component';
import { AllPostsComponent } from './entity/user/components/all-posts/all-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    PostComponent,
    AllPostComponent,
    CommentComponent,
    AllCommentComponent,
    UserDetailsTwoComponent,
    UserDetailsThreeComponent,
    AllPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: AllUsersComponent, resolve: {xxx: UserResolveService},
        children: [
          // {
          //   path: 'details/:id', component: UserDetailsComponent
          // }
          // {
          //   path: 'details/:id', component: UserDetailsTwoComponent
          // }
          {
            path: 'details/:id', component: UserDetailsThreeComponent
          },
          {
            path: 'posts', component: AllPostsComponent
          }
        ]
      },
      // {path: 'users/details/:id', component: UserComponent},
      {path: 'posts', component: AllPostComponent, resolve: {ppp: PostResolveService}},
      {path: 'comments', component: AllCommentComponent, resolve: {ccc: CommentResolveService}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
