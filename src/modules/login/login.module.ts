import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import { AngularMaterial } from '../../material';
import * as FromLogin from './components';
import * as FromLoginContainers from './containers';



@NgModule({
  declarations: [
    FromLogin.LoginComponents,
    FromLoginContainers.LoginContainers
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterial
  ]
})
export class LoginModule { }
