import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
goToOriginPost() {
throw new Error('Method not implemented.');
}

 @Input() post!: Post;

 deletePost() {
  throw new Error('Method not implemented.');
}

}
