import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromStore from '../../store';
import * as Authentication from '../../../../app/shared/classes/authentication.state'

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainerComponent {

  constructor(private store: Store<Authentication.AuthenticationState>) { }

  login() {
    this.store.dispatch(new FromStore.Login());
  }
}
