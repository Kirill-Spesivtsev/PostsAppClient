import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {

  @Input() post!: Post;

  goToOriginPost() {
    throw new Error('Method not implemented.');
  }

  deletePost() {
    throw new Error('Method not implemented.');
  }

}
