import { DashboardItem } from './../models/dashboard.models';
import * as FromDashboard from '../actions/dashboard.actions';

export interface DashboardState {
    data: DashboardItem[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: DashboardState = {
    data: [],
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: FromDashboard.DashboardAction
): DashboardState {

    switch (action.type) {
        case FromDashboard.APP_DASHBOARD: {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }
        case FromDashboard.APP_DASHBOARD_SUCCESS: {
            return {
                data: action.payload,
                loading: false,
                loaded: true
            };
        }
        case FromDashboard.APP_DASHBOARD_FAIL: {
            return {
                data: action.payload,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getDashboardLoading = (state: DashboardState) => state.loading;
export const getDashboardLoaded = (state: DashboardState) => state.loaded;
export const getDashboardInfo = (state: DashboardState) => state.data;
