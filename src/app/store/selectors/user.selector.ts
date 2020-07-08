import { State } from '../reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getAppState = createFeatureSelector<State>(
    'State'
);

export const getUserState = createSelector(
    getAppState,
    state => state.userState
);

export const getIsAuthenticated = createSelector(
    getUserState,
    state => state.isAuthenticated
);

export const getError = createSelector(
    getUserState,
    state => state.error
);

export const getLoading = createSelector(
    getUserState,
    state => state.loading
);

export const getCurrentUser = createSelector(
    getUserState,
    state => state.user
);