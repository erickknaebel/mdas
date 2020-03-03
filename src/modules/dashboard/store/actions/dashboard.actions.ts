import { Action } from '@ngrx/store';
import { DashboardItem } from '../models';

export const APP_DASHBOARD = '[App] Dashboard';
export const APP_DASHBOARD_SUCCESS = '[App] Dashboard Success';
export const APP_DASHBOARD_FAIL = '[App] Dashboard Fail';

export class Dashboard implements Action {
    readonly type = APP_DASHBOARD;
}

export class DashboardSuccess implements Action {
    readonly type = APP_DASHBOARD_SUCCESS;
    constructor(public payload: DashboardItem[]) { }
}

export class DashboardFail implements Action {
    readonly type = APP_DASHBOARD_FAIL;
    constructor(public payload: any) {  }
}

export type DashboardAction = Dashboard | DashboardSuccess | DashboardFail;