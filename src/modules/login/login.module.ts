import { NgModule, DoBootstrap } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import { AngularMaterial } from '../../material';
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
    StoreModule.forFeature('authentication', reducers)
  ],
  entryComponents: [FromLogin.LoginComponents, FromLoginContainers.LoginContainers]
})
export class LoginModule {

}
