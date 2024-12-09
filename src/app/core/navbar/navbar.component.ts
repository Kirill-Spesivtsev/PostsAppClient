import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router){}

  search(query: string) {
    const navigationExtras: NavigationExtras = { queryParams: { query: query } }; 
    this.router.navigate(['/posts'], navigationExtras);
  }

  create() {
    this.router.navigate(['/post/create']);
  }
}
