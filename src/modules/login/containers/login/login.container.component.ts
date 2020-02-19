import { Component, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.component.html',
  styleUrls: ['./login.container.component.scss']
})
export class LoginContainerComponent {

  name: string = 'Erick';
  loaded: boolean = false;

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
