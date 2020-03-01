import { Action } from '@ngrx/store';
import { UserData } from '../../models/user';

export const APP_LOGIN = '[App] Login In';
export const APP_LOGIN_SUCCESS = '[App] Login In Success';
export const APP_LOGIN_FAIL = '[App] Login In Fail';

export class Login implements Action {
    readonly type = APP_LOGIN;
}

export class LoginSuccess implements Action {
    readonly type = APP_LOGIN_SUCCESS;
    constructor(public payload: UserData) {}
}

export class LoginFail implements Action {
    readonly type = APP_LOGIN_FAIL;
    constructor(public payload: any) {}
}

export type LoginAction = Login | LoginSuccess | LoginFail;
