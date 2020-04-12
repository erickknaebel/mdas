import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
// import * as FromLogin from './login.reducer';
import * as FromLogout from '../../store/reducers/logout.reducer';
import * as FromUserModels from '../models/user.models';


export interface AuthenticationState {
    state: FromUserModels.UserState;
}

export const reducers: ActionReducerMap<AuthenticationState> = {
    state: FromLogout.reducer
}

export const getAuthenticationState =
    createFeatureSelector<AuthenticationState>('authentication');

export const getLoginState = createSelector(
    getAuthenticationState,
    (state: AuthenticationState) => state.state
);

export const getUserInfo = createSelector(getLoginState, FromLogout.getUserInfo);
export const getUserLoaded = createSelector(getLoginState, FromLogout.getUserLoaded);
export const getUserLoading = createSelector(getLoginState, FromLogout.getUserLoading);