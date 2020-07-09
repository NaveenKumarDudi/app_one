import { State } from '../reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getAppState = createFeatureSelector<State>(
    'State'
);

export const getShopState = createSelector(
    getAppState,
    state => state.shopState
);

export const allCategories = createSelector(
    getShopState,
    state => state.categories
);