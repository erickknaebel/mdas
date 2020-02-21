import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as FromRouter from '@ngrx/router-store';

import { Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export interface State {
    routerReducer: FromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: FromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
    FromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

export class CustomSerializer implements FromRouter.RouterStateSerializer<RouterStateUrl> {
  
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        console.log('custom serializer.....');
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        return {url, queryParams, params};
    }
}
