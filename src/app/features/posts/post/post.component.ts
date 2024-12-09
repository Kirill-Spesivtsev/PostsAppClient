import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {

  @Input() post!: Post;

  deletePost() {
    throw new Error('Method not implemented.');
  }

}
