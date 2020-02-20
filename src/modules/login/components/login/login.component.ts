import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output() loggingIn = new EventEmitter<string>();

  @Input() user;

  signIn() {
    this.loggingIn.next('logginIn');
  }

}
