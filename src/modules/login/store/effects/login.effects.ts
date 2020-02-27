import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map} from 'rxjs/operators';
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
        map(action => (action as any).payload),
        switchMap(payload => {
            let user;
            this.as.login(payload.email, payload.password).subscribe(value => {
                if (value == null) {
                    console.log('value == null')
                    user = of(new LoginActions.LoginFail({
                        name: null,
                        email: null,
                        photoUrl: null
                    }))
                } else {
                    console.log('value != null')
                    // user = map(value => new LoginActions.LoginSuccess(value));
                }
            })
            return user;
        })
    );
}
