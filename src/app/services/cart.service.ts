import { Injectable } from '@angular/core';
import * as fromStore from '../store/reducers';
import * as CartActions from '../store/actions/cart.actions';
import * as fromSelector from '../store/selectors/cart.selector';
import { Store } from '@ngrx/store';
import { ICart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private store: Store<fromStore.State>
  ) { }

  getCartItems() {
    return this.store.select(fromSelector.getCartItems);
  }

  addToCart(cartItem: ICart) {
    this.store.dispatch(CartActions.addItem({cartItem}));
  }

  removeFromCart(cartItem: ICart) {
    this.store.dispatch(CartActions.removeItem({cartItem}));
  }

  clearItemFromCart(cartItem: ICart) {
    this.store.dispatch(CartActions.clearItemFromCart({cartItem}));
  }

}
