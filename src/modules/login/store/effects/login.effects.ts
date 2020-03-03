import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map} from 'rxjs/operators';

import * as LoginActions from '../actions/login.action';
import { AuthorizationService } from './../../../../app/services/authorization.service';

@Injectable()
export class LoginEffects {

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
                    if (response.user != null) {
                        return new LoginActions.LoginSuccess(response['user']['providerData'][0]);
                    } else {
                        return new LoginActions.LoginFail({ error: response.message });
                    }
                })
            );
        })
    );
}
