import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import * as LogoutAction from '../actions/logout.action';
import { AuthorizationService } from './../../services/authorization.service';

@Injectable()
export class LogoutEffect {

    authenticated;

    constructor(
        private actions$: Actions,
        private as: AuthorizationService,
    ) { }

    @Effect()
    logout$ = this.actions$.pipe(
        ofType(LogoutAction.APP_LOGOUT),
        switchMap(() => {
            return this.as.logout().pipe(
                map(response => {
                    console.log(response)
                    if (response == undefined) {
                        return new LogoutAction.LogoutSuccess(response);
                    } else {
                        return new LogoutAction.LogoutFail({ error: response.message });
                    }
                })
            )
        })
    );
}
