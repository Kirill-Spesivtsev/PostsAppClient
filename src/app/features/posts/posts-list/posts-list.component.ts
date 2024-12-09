import { Component, Input, OnInit, Output } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { Post } from 'src/app/interfaces/post';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(public postsService: PostsService, private route: ActivatedRoute, private router: Router) { }

  allPosts?: Post[];
  filteredPosts: Post[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => { 
      this.setFilter(params['query']); 
    });
    this.refreshAllPosts();
  }
  

  refreshAllPosts() {
    this.postsService.getAllPosts().subscribe({
      next: response => {
        this.allPosts = response;
        this .filteredPosts = response;
      },
      error: error => console.log(error)
    })
  }

  deletePostById(id: string): void {
    this.allPosts = this.allPosts?.filter(post => post.id !== id);
    this.filteredPosts = this.filteredPosts?.filter(post => post.id !== id);
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
