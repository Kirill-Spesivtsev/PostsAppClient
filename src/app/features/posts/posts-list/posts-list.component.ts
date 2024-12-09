import { Component, Input, OnInit, Output } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  allPosts?: Post[];

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe({
      next: response => {
        this.allPosts = response;
      },
      error: error => console.log(error)
    })
  }

}
