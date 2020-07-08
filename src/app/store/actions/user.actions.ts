import { createAction, props, Action } from '@ngrx/store';
import { IUser } from 'src/app/models/User';
import { IError } from 'src/app/models/Error';
import { createEffect } from '@ngrx/effects';

export const START_LOGIN = '[AUTH] START_LOGIN';
export const LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS';
export const LOGIN_FAIL = '[AUTH] LOGIN_FAIL';

// Login realted actions

export const startLogin = createAction(
    START_LOGIN,
    props<{user: IUser}>()
);

export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<{user: IUser}>()
);

export const loginFail = createAction(
    LOGIN_FAIL,
    props<{error: any}>()
)