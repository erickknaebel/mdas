import { ActionReducerMap } from '@ngrx/store';
import * as fromLogin from './login.reducer';

export interface Authenticated {
    login: fromLogin.UserState;
}

export const reducers: ActionReducerMap<Authenticated> = {
    login: fromLogin.reducer
}