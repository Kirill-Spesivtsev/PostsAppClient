import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    PostsListComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    PostsListComponent,
    PostComponent
  ]
})
export class PostsModule { }
