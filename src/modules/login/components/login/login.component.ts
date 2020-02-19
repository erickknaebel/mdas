import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loggingIn = new EventEmitter<string>();

  @Input() user;

  constructor() { }

  ngOnInit() {
  }

  signIn() {
    this.loggingIn.next('logginIn');
  }

}
