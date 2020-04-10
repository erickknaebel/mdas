import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import * as FromLogin from '../modules/login/store';
import { Observable } from 'rxjs';
import * as AuthenticationStatus from './shared/classes/authentication.state'

@Component({
  selector: 'app-root',
  template: `
 <app-navigation-container [authenticated$]="authorized$"></app-navigation-container>
  <div class="container=fluid">
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styles: []
})

export class AppComponent {

  authorized$: Observable<any>;

  constructor(private store: Store<AuthenticationStatus.AuthenticationState>) {
    this.store.dispatch(new FromLogin.Login());
    this.authorized$ = this.store.select(AuthenticationStatus.getUserLoaded);
  }

}
