import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Credentials } from '../../models/user';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() loggingIn = new EventEmitter<Credentials>();

  @Input() user;

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', null),
      password: new FormControl('', Validators.required)
    })
  }

  signIn() {
    const data: Credentials = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
    this.loggingIn.next(data);
    
  }

}
