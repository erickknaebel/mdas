import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Credentials } from '../../../../app/shared/models/user.models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() login = new EventEmitter<Credentials>();

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
    };
    environment.credentials = data;
    this.login.next(data);
    
  }

}
