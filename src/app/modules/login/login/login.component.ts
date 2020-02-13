import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as LoginActions from './../../../ngrx/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  email: string;
  password: string;

  ngOnInit() {
  }

  login() {
    this.store.dispatch(
      new LoginActions.AppLogin(
        { username: 'erick', password: 'knaebel', photoUrl: '' }
      )
    )
  }

}
