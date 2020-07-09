import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input('cartItem') cartItem: any;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addItem(cartItem) {
    this.cartService.addToCart(cartItem);
  }

  removeItem(cartItem) {
    this.cartService.removeFromCart(cartItem);
  }

}
