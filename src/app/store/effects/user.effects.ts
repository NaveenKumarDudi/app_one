import { Injectable } from "@angular/core";
import { UserService } from 'src/app/services/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from '../actions/user.actions';
import { exhaustMap, catchError, map } from 'rxjs/Operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(
        private userService: UserService,
        private action: Actions
    ) {}

    login$ = createEffect(
        () => this.action.pipe(
            ofType(UserActions.startLogin),
            exhaustMap(action => 
                this.userService._authenticate(action.user)
                    .pipe(
                        map(user => UserActions.loginSuccess({user})),
                        catchError(error => of(UserActions.loginFail({error})))
                    )    
            )
        )
    );

    register$ = createEffect(
        () => this.action.pipe(
            ofType(UserActions.startRegister),
            exhaustMap(action => 
                this.userService._register(action.user)
                    .pipe(
                        map(user => UserActions.registerSuccess({user})),
                        catchError(error => of(UserActions.registerFail({error})))
                    )    
            )
        )
    );

}