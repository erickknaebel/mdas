import * as fromLogin from '../actions/login.action';
import { UserData } from '../../models/user';

export interface UserState {
    data: UserData;
    activeUser: boolean;
    loaded: boolean;
    loading: boolean;
}

export const initialState: UserState = {
    data: {
        name: 'Erick Knaebel',
        email: 'erick.knaebel@roush.com',
        photoUrl: ''
    },
    activeUser: false,
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromLogin.LoginAction
): UserState {

    switch (action.type) {
        case fromLogin.APP_LOGIN: {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }
        case fromLogin.APP_LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            };
        }
        case fromLogin.APP_LOGIN_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}