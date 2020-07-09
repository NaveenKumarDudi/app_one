import { ICategory } from 'src/app/models/Category';
import { createReducer, on, Action } from '@ngrx/store';
import * as ShopActions from '../actions/shop.actions';

export interface ShopState {
    categories: ICategory [];
}

const INITIAL_STATE: ShopState = {
    categories: null
}

const shopReducer = createReducer(
    INITIAL_STATE,
    on(ShopActions.getCategories, state => ({
        ...state
    })),
    on(ShopActions.categoriesSuccess, (state, {categories}) => ({
        ...state,
        categories: categories
    }))
)

export function reducer(state: ShopState | undefined, action: Action) {
    return shopReducer(state, action);
}