import { Action } from '@ngrx/store';
import { UserData } from '../../shared/models/user.models';

export const APP_LOGOUT = '[App] Logout In';
export const APP_LOGOUT_SUCCESS = '[App] Logout In Success';
export const APP_LOGOUT_FAIL = '[App] Logout In Fail';

export class Logout implements Action {
    readonly type = APP_LOGOUT;
}

export class LogoutSuccess implements Action {
    readonly type = APP_LOGOUT_SUCCESS;
    constructor(public payload: UserData) {}
}

export class LogoutFail implements Action {
    readonly type = APP_LOGOUT_FAIL;
    constructor(public payload: any) {}
}

export type LogoutAction = Logout | LogoutSuccess | LogoutFail
