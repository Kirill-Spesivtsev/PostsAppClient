import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiBaseUrl}/posts`);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiBaseUrl}/posts/${id}`);
  }

  deletePostById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/posts/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Post>(`${this.apiBaseUrl}/posts`, post, { headers });
  }
}