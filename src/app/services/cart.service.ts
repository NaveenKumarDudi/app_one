import { Injectable } from '@angular/core';
import * as fromStore from '../store/reducers';
import * as CartActions from '../store/actions/cart.actions';
import * as fromSelector from '../store/selectors/cart.selector';
import { Store } from '@ngrx/store';

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

  addToCart(cartItem: any) {
    this.store.dispatch(CartActions.addItem({cartItem}));
  }

  removeFromCart(cartItem: any) {
    this.store.dispatch(CartActions.removeItem({cartItem}));
  }

}
