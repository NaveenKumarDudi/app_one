import { IUser } from 'src/app/models/User';
import { IError } from 'src/app/models/Error';
import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export interface UserState{
    user?: IUser;
    error?: IError;
    loading?: boolean;
    isAuthenticated?: boolean; 
}

const INITIAL_STATE: UserState = {
    user: null,
    error: null,
    loading: false,
    isAuthenticated: false
}

const userReducer = createReducer(
    INITIAL_STATE,
    on(UserActions.startLogin, state => ({
        ...state,
        loading: true
    })),
    on(UserActions.loginSuccess, (state, { user }) => ({
        ...state,
        user: user,
        loading: false,
        error: null,
        isAuthenticated: true
    })),
    on(UserActions.loginFail, (state, { error }) => ({
            ...state,
            error: error,
            user: null,
            loading: false,
            isAuthenticated: false
    })),
    on(UserActions.startRegister, state => ({
        ...state,
        loading: true
    })),
    on(UserActions.registerSuccess, (state, { user }) => ({
        ...state,
        user: user,
        loading: false,
        error: null,
        isAuthenticated: true
    })),
    on(UserActions.registerFail, (state, { error }) => ({
        ...state,
        error: error,
        user: null,
        isAuthenticated: false,
        loading: false
    }))
);

export function reducer(state: UserState | undefined, action: Action) {
    return userReducer(state, action);
} 