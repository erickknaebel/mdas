import { LoginSuccess } from './../actions/login.action';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, exhaustMap} from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import * as LoginActions from '../actions/login.action';
import { AuthorizationService } from './../../../../app/services/authorization.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoginEffects {

    userData: any;

    constructor(
        private actions$: Actions,
        private as: AuthorizationService,
    ) { }

    @Effect()
    login$ = this.actions$.pipe(
        ofType(LoginActions.APP_LOGIN),
        switchMap(() => {
            return this.as.login(environment.credentials.email, environment.credentials.password).pipe(
                map(response => {
                    this.userData = response.json();
                    console.log(this.userData)
                    if (response.user != null) {
                        return new LoginActions.LoginSuccess(response);
                    } else {
                        return new LoginActions.LoginFail({ error: response.message });
                    }
                })
            );
        })
    );
}
