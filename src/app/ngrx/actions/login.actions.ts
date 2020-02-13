import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Login } from './../models/login.models';
import { SignUp } from '../models/login.models';

export const APP_LOGIN = '[APP] Login';
export const APP_SIGNUP = '[APP] SignUp';

export class AppLogin implements Action {
    readonly type = APP_LOGIN;
    constructor( public payload: Login ){}
}

export class AppSignUp implements Action {
    readonly type = APP_SIGNUP;
    constructor( public payload: SignUp){}
}

export type Actions = AppLogin | AppSignUp;