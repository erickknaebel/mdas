import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private router: Router) { }

  navigateTo(path: string) {
    if (path != null) {
      this.router.navigate([path]);
    }
  }

}