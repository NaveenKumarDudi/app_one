import { State } from '../reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getAppState = createFeatureSelector<State>(
    'State'
);

export const getCartState = createSelector(
    getAppState,
    state => state.cartState
)

export const getCartItems = createSelector(
    getCartState,
    state => state.cartItems
)