import { Action, createAction, props } from '@ngrx/store';
import { Login } from './../models/login.models';
import { SignUp } from '../models/login.models';

export const APP_LOGIN = '[APP] Login';
export const APP_SIGNUP = '[APP] SignUp';

export class AppLogin implements Action {
    readonly type = APP_LOGIN;
    constructor(public payload: Login) { }
}

export class AppSignUp implements Action {
    readonly type = APP_SIGNUP;
    constructor(public payload: SignUp) { }
}

export const userLogin = createAction(
    '[APP LOGIN PAGE] User Login',
    props<{}>()
)

export const appLoginSucessful = createAction(
    '[APP LOGIN] Successful login',
    props<{ payload: any }>()
)

export const appLoginFail = createAction(
    '[APP LOGIN] Login has failed',
    props<{}>()
)

export type Actions = AppLogin | AppSignUp;