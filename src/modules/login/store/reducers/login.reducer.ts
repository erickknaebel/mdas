import * as FromLogin from '../actions/login.action';
import { UserData } from '../../models/user';

export interface UserState {
    data: UserData;
    loaded: boolean;
    loading: boolean;
}

export const initialState: UserState = {
    data: {
        name: 'Erick Knaebel',
        email: 'erick.knaebel@roush.com',
        photoUrl: ''
    },
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: FromLogin.LoginAction
): UserState {

    switch (action.type) {
        case FromLogin.APP_LOGIN: {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }
        case FromLogin.APP_LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            };
        }
        case FromLogin.APP_LOGIN_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getUserLoading = (state: UserState) => state.loading;
export const getUserLoaded = (state: UserState) => state.loaded;
export const getUser = (state: UserState) => state.data;
