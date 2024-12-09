import { Component, Input, OnInit, Output } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { Post } from 'src/app/interfaces/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(public postsService: PostsService, private route: ActivatedRoute) { }

  allPosts?: Post[];
  filteredPosts: Post[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => { 
      this.setFilter(params['query']); 
    });
    this.postsService.getAllPosts().subscribe({
      next: response => {
        this.allPosts = response;
        this .filteredPosts = response;
      },
      error: error => console.log(error)
    })
  }

  setFilter(query: string) {
    this.filteredPosts = this.getFilteredPosts(query);
  }

  private getFilteredPosts(searchQuery: string): Post[] {
    if (!this.allPosts || !searchQuery || searchQuery === ''){
      return this.allPosts ?? [];
    }
    return this.allPosts?.filter(post => 
      post.title.toLowerCase().includes(searchQuery!.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery!.toLowerCase()));
  }

}
