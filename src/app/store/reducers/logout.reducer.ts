import * as FromLogin from '../actions/logout.action';
import { UserData } from '../../shared/models/user.models';

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
    action: FromLogin.LogoutAction
): UserState {

    switch (action.type) {
        case FromLogin.APP_LOGOUT: {
            return {
                ...user,
                loading: true,
                loaded: false
            };
        }
        case FromLogin.APP_LOGOUT_SUCCESS: {
            return {
                user: action.payload,
                loading: false,
                loaded: true
            };
        }
        case FromLogin.APP_LOGOUT_FAIL: {
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

