import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginRoutingModule } from './login.routing';

import {
  MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatToolbarModule,
  MatListModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatSliderModule,
  MatButtonToggleModule, MatStepperModule, MatTableModule, MatIconModule
} from '@angular/material';


@NgModule({
  declarations: [LoginComponent, SignupComponent,],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class LoginModule { }
