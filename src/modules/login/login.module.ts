import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import { AngularMaterial } from '../../material';
import { LoginComponents } from './components/index';
import * as FromLogin from './components';
import * as FromLoginContainers from './containers';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
  declarations: [
    FromLogin.LoginComponents,
    FromLoginContainers.LoginContainers
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterial,
    StoreModule.forFeature('user', reducers)
  ],
  entryComponents: [
    LoginComponents
  ]
})
export class LoginModule { }
