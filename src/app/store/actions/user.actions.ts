import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/models/User';

// Login realted action types
export const START_LOGIN = '[AUTH] START_LOGIN';
export const LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS';
export const LOGIN_FAIL = '[AUTH] LOGIN_FAIL';

// Register realted action types
export const START_REGISTER = '[AUTH] START_REGISTER';
export const REGISTER_SUCCESS = '[AUTH] REGISTER_SUCCESS';
export const REGISTER_FAIL = '[AUTH] REGISTER_FAIL';


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
);

// Register related actions
export const startRegister = createAction(
    START_REGISTER,
    props<{user: IUser}>()
);

export const registerSuccess = createAction(
    REGISTER_SUCCESS,
    props<{user: IUser}>()
);

export const registerFail = createAction(
    REGISTER_FAIL,
    props<{error: any}>()
);