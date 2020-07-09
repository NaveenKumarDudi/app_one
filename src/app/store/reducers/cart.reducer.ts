import { createReducer, on, Action } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import { ICart } from 'src/app/models/Cart';
import { addItemToCart, removeItemFromCart } from '../utility';

export interface CartState {
    cartItems: ICart [];
}

const INITIAL_STATE: CartState = {
    cartItems: null
}

const cartReducer = createReducer(
    INITIAL_STATE,
    on(CartActions.addItem, (state, {cartItem}) => ({
        ...state,
        cartItems: addItemToCart(state.cartItems, cartItem)
    })),
    on(CartActions.removeItem, (state, {cartItem})=>({
        ...state,
        cartItems: removeItemFromCart(state.cartItems, cartItem)
    })),
    on(CartActions.clearItemFromCart, (state, {cartItem}) => ({
        ...state,
        cartItems: state.cartItems.filter(e => e.id !== cartItem.id)
    }))
);

export function reducer(state: CartState | undefined, action: Action) {
    return cartReducer(state, action);
} 