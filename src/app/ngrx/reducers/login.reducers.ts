import { Action } from '@ngrx/store';
import { Login } from '../models/login.models';
import * as LoginActions from './../actions/login.actions';

const initialState: Login = {
    username: '',
    password: '',
    photoUrl: ''
}

export function loginReducer(state: Login, action: LoginActions.Actions) {
    switch(action.type) {
        case LoginActions.APP_LOGIN:
            state = action.payload;
            return state;
        default:
            return state;

    }
}