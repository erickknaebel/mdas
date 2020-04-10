import { Action } from '@ngrx/store';
import { UserData } from '../../../../app/shared/models/user.models';

// export const APP_REFRESH = '[APP] Refresh Application';
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

// export class Refresh implements Action {
//     readonly type = APP_REFRESH;
// }

export type LoginAction = Login | LoginSuccess | LoginFail //| Refresh;
