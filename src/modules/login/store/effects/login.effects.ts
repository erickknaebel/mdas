import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as LoginActions from '../actions/login.action';
import { AuthorizationService } from './../../../../app/services/authorization.service';

@Injectable()
export class LoginEffects {

    constructor(
        private actions$: Actions,
        private as: AuthorizationService
    ) { }

    @Effect()
    login$ = this.actions$.pipe(
        ofType(LoginActions.APP_LOGIN),
        switchMap(() => {
            return this.as.login('erick.knaebel@roush.com', 'WhiteDog22', null).pipe(
                map(user => new LoginActions.LoginSuccess(user)),
                catchError(error => of(new LoginActions.LoginFail(error)))
            );
        })
    );
}
