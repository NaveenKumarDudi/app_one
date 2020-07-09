import { createAction, props } from '@ngrx/store';
import { ICart } from 'src/app/models/Cart';

export const ADD_ITEM = '[CART] ADD_ITEM';
export const REMOVE_ITEM = '[CART] REMOVE_ITEM';
export const CLEAR_ITEM = '[CART] CLEAR_ITEM';

export const addItem = createAction(
    ADD_ITEM,
    props<{cartItem: ICart}>()
)

export const removeItem = createAction(
    REMOVE_ITEM,
    props<{cartItem: ICart}>()
)

export const clearItemFromCart = createAction(
    CLEAR_ITEM,
    props<{cartItem: ICart}>()
)