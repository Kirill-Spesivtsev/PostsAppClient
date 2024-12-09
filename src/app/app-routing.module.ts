import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './features/posts/posts-list/posts-list.component';

const routes: Routes = [
  {path: "posts", component: PostsListComponent},
  {path: "**", redirectTo: "posts", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
