import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromStore from '../../store';


@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainerComponent {

  constructor(private store: Store<FromStore.AuthenticationState>) { }

  loggingIn() {
    this.store.dispatch(new FromStore.Login());
  }
}
