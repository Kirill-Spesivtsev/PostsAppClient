import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { SharedModule } from "../../../shared/shared.module";
import { PostsService } from 'src/app/services/posts.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {

  @Input() post!: Post;
  @Input() deletePostById!: (id: string) => void;

  constructor(private postsService: PostsService, private toastr: ToastrService, private router: Router){}

  deletePost(): void { 
    if (window.confirm('Are you sure you want to delete this post?')) { 
      this.postsService.deletePostById(this.post.id).subscribe({
        next: () => {
          this.deletePostById(this.post.id);
          this.router.navigate(['/posts']);
          this.toastr.success("Post was deleted", "Success");
        },
        error: (error) => this.toastr.error("Error deleting post", "Error")
      });
    } 
  }

}
