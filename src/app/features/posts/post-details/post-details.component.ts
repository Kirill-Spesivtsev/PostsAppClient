import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit{

  post?: Post;
  
  constructor(private postsService: PostsService, private route: ActivatedRoute) { } 
  
  ngOnInit(): void { 
    const params = this.route.snapshot.paramMap; 
    const id = params.get(params.keys[params.keys.length - 1]);
    if (id) {
      this.postsService.getPostById(id).subscribe({
        next: response => this.post = response,
        error: error => console.log(error)
      });
    }
  }

  goToOriginPost() {
    throw new Error('Method not implemented.');
  }

  deletePost() {
    throw new Error('Method not implemented.');
  }

}
