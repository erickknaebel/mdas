import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loggingIn = new EventEmitter<string>();

  @Input() name: string;
  

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
