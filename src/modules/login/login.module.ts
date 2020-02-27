import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import { AngularMaterial } from '../../material';
import * as FromLogin from './components';
import * as FromLoginContainers from './containers';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';


import { AuthorizationService } from './../../app/services/authorization.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FromLogin.LoginComponents,
    FromLoginContainers.LoginContainers
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    AngularMaterial,
    StoreModule.forFeature('authentication', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [AuthorizationService],
  entryComponents: [FromLogin.LoginComponents, FromLoginContainers.LoginContainers]
})
export class LoginModule {

}
