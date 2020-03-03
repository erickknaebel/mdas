
import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import * as DashboardAction from '../actions/dashboard.actions';
import { DataService } from './../../../../app/services/data.service';

@Injectable()
export class DashboardEffects {

    constructor(
        private actions$: Actions,
        private ds: DataService,
    ) { }

    @Effect()
    dashboard$ = this.actions$.pipe(
        ofType(DashboardAction.APP_DASHBOARD),
        switchMap(() => {
            return this.ds.getRecords('/documents').pipe(
                map(response => {
                    console.log(response);
                    return new DashboardAction.DashboardSuccess(response);
                })
            )
        })
    );
}
