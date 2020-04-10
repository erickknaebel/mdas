import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as FromStore from '../../classes/authentication.state'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  @Input()userName = 'original';

  constructor(private router: Router, private store: Store<FromStore.AuthenticationState>) {
  }

  navigateTo(path: string) {
    if (path != null) {
      this.router.navigate([path]);
    }
  }

  signout() {
    console.log('signout from navigation component called....')
   
  }

}
