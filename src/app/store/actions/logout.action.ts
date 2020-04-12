import { Action } from '@ngrx/store';

export const APP_LOGOUT = '[App] Logout';
export const APP_LOGOUT_SUCCESS = '[App] Logout Success';
export const APP_LOGOUT_FAIL = '[App] Logout Fail';

export class Logout implements Action {
    readonly type = APP_LOGOUT;
}

export class LogoutSuccess implements Action {
    readonly type = APP_LOGOUT_SUCCESS;
    constructor(public payload: any) {
    }
}

export class LogoutFail implements Action {
    readonly type = APP_LOGOUT_FAIL;
    constructor(public payload: any) {}
}

export type LogoutAction = Logout | LogoutSuccess | LogoutFail
