import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromStore from '../../store';


@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
export class LoginContainerComponent {

  user$ = null;

  constructor(private store: Store<FromStore.AuthenticationState>) { }

  ngOnInit() {

  }

  loggingIn() {
    this.user$ = this.store.select<any>(FromStore.getUserInfo);
  }
  
}
