import * as FromLogout from '../actions/logout.action';
import { UserData } from '../../shared/models/user.models';
import { UserState } from './../../shared/models/user.models';


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
    action: FromLogout.LogoutAction
): UserState {

    switch (action.type) {
        case FromLogout.APP_LOGOUT: {
            console.log('app log out...')
            return {
                ...user,
                loading: true,
                loaded: false
            };
        }
        case FromLogout.APP_LOGOUT_SUCCESS: {
            console.log('app log out success...')
            return {
                user: this.initialState,
                loading: false,
                loaded: true
            };
        }
        case FromLogout.APP_LOGOUT_FAIL: {
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

