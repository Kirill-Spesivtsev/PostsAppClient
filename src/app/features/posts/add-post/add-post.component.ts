import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/services/posts.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private fb: FormBuilder, private postsService: PostsService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['',[Validators.required, Validators.minLength(3)]],
      article_link: ['', [this.urlValidator]],
      creator: [''],
      content: ['', [Validators.required, Validators.minLength(10)]],
      media_url: ['',[this.urlValidator]]
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      let post = this.postForm.value
      post.id = uuid();
      this.postsService.addPost(post).subscribe({
        next: () => {
          this.postForm.reset();
          this.toastr.success('Post added successfully', 'Success');
          this.router.navigate(['/posts']);
        },
        error: () => {
          this.toastr.error('Error adding post', 'Error');
        }
    })
    } else {
      this.postForm.markAllAsTouched();
    }
  }

  urlValidator(control: { value: string }) {
    const urlPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    if (!control.value || urlPattern.test(control.value)) {
      return null;
    }
    return { invalidUrl: true };
  }
}