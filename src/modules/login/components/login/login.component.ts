import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginContainerComponent } from '../../containers/login/login.component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loggingIn = new EventEmitter<string>();

  // private loggingIn: BehaviorSubject<string> = new BehaviorSubject('false');
  // private login = this.loggingIn.asObservable();

  constructor() { }

  ngOnInit() {
  }

  signIn() {
    console.log('signIn from components/login.component')
    this.loggingIn.next('logginIn');
    console.log(this.loggingIn)
  }

}
