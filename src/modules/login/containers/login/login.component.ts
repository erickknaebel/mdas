import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserData } from '../../models/user';
import * as fromStore from '../../store';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private store: Store<fromStore.Authenticated>) { }

  email: string;
  password: string;

  ngOnInit() {
    this.store.select<any>('login').subscribe(state => {
      console.log(state);
    })
  }

}
