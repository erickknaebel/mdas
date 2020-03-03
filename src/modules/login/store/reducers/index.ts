import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as FromLogin from './login.reducer';

export interface AuthenticationState {
    state: FromLogin.UserState;
}

export const reducers: ActionReducerMap<AuthenticationState> = {
    state: FromLogin.reducer
}

export const getAuthenticationState =
    createFeatureSelector<AuthenticationState>('authentication');

export const getLoginState = createSelector(
    getAuthenticationState,
    (state: AuthenticationState) => state.state
);

export const getUserInfo = createSelector(getLoginState, FromLogin.getUserInfo);
export const getUserLoaded = createSelector(getLoginState, FromLogin.getUserLoaded);
export const getUserLoading = createSelector(getLoginState, FromLogin.getUserLoading);