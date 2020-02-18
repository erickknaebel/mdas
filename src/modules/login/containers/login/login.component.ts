import { Component, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginContainerComponent {

  constructor(private store: Store<fromStore.Authenticated>) { }

  ngOnInit() {
    this.store.select<any>('login').subscribe(state => {
      console.log(state);
    })
  }

  loggingIn() {
    console.log('logging in.....', event)
  }
  
}
