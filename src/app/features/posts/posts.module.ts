import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [
    PostsListComponent,
    PostComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    PostsListComponent,
    PostComponent,
    PostDetailsComponent,
  ]
})
export class PostsModule { }
