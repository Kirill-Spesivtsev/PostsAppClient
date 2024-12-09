import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PostsAppClient';
  
  constructor(private router: Router){}

  search(query: string){
    const navigationExtras: NavigationExtras = { queryParams: { query: query } }; 
    this.router.navigate(['/posts'], navigationExtras);
  }
}
