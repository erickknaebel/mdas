import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as FromDashboard from './dashboard.reducers';

export interface DashboardState {
    state: FromDashboard.DashboardState;
}

export const reducers: ActionReducerMap<DashboardState> = {
    state: FromDashboard.reducer
}

export const getDashboard =
    createFeatureSelector<DashboardState>('dashboard');

export const getDState = createSelector(
    getDashboard,
    (state: DashboardState) => state.state
);

export const getDashboardInfo = createSelector(getDState, FromDashboard.getDashboardInfo);
export const getDashboardLoaded = createSelector(getDState, FromDashboard.getDashboardLoaded);
export const getDashboardLoading = createSelector(getDState, FromDashboard.getDashboardLoading);