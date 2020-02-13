import { AuthorizationService } from './../../shared/services/authorization.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as LoginActions from '../actions/login.actions';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthenticationEffects {
    appLogin$ = createEffect(() =>
        this.action$
            .pipe(
                
            )
    )

    constructor(
        private action$: Actions,
        private as: AuthorizationService) {

    }
}