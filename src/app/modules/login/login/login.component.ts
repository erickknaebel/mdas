import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as LoginActions from './../../../ngrx/actions/login.actions'
import { Login } from '../../../ngrx/models/login.models';
import { EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private firebase: AngularFireAuth, private store: Store<AppState>) { }

  userData$ = this.store.select('user').subscribe(value => {
    console.log(value)
  })


  login(email: string, password: string) {
    this.firebase
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
        sessionStorage.setItem('authenticated', 'true');
        this.store.dispatch(new LoginActions.AppLogin({username: email, password: password, photoUrl: ''}) )
        this.router.navigate(['dashboard']);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  ngOnInit() {
  }

}
