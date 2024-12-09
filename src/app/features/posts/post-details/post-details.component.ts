import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit{

  post?: Post;
  
  constructor(private postsService: PostsService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) { } 
  
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

  deletePost(): void { 
    if (this.post) {
      if (window.confirm('Are you sure you want to delete this post?')) { 
        this.postsService.deletePostById(this.post.id).subscribe({
          next: () => {
            this.router.navigate(['/posts'])
            .then(() => {  
              this.toastr.success("Post was deleted", "Success");
            });
          },
          error: (error) => this.toastr.error("Error deleting post", "Error")
        });
      } 
    }
  }

}
