import * as FromLogin from '../actions/login.action';
import { UserData } from '../../models/dashboard';

export interface UserState {
    user: UserData;
    loaded: boolean;
    loading: boolean;
}

export const initialState: UserState = {
    user: {
        name: null,
        email: null,
        photoUrl: null,
        uid: null,
        displayName: null,
        photoURL: null,
        phoneNumber: null,
        providerId: null,
        error: null
    },
    loaded: false,
    loading: false
};

export function reducer(
    user = initialState,
    action: FromLogin.LoginAction
): UserState {

    switch (action.type) {
        case FromLogin.APP_LOGIN: {
            return {
                ...user,
                loading: true,
                loaded: false
            };
        }
        case FromLogin.APP_LOGIN_SUCCESS: {
            return {
                user: action.payload,
                loading: false,
                loaded: true
            };
        }
        case FromLogin.APP_LOGIN_FAIL: {
            return {
                user: action.payload,
                loading: false,
                loaded: false
            };
        }
    }

    return user;
}

export const getUserLoading = (user: UserState) => user.loading;
export const getUserLoaded = (user: UserState) => user.loaded;
export const getUserInfo = (user: UserState) => user.user;

