import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer,
    Action
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromUser from './user.reducer';
import * as fromCart from './cart.reducer';

// Here comes the name of the states
// Individual state that need to be stored in local storage
const KEYS_TO_PERSIST = ['userState', 'cartState'];

// Defining app state
export interface State {
    // Reducer states here
    userState?: fromUser.UserState,
    cartState?: fromCart.CartState
};

export const reducers: ActionReducerMap<State> = {
    // our reducers here
    userState: fromUser.reducer,
    cartState: fromCart.reducer
};


// To SYnc up with localstorage
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: KEYS_TO_PERSIST,
        rehydrate: true
    })(reducer);
}

// Meta reducers
export const metaReducers: Array<MetaReducer<State, Action>> = [
    localStorageSyncReducer
];
