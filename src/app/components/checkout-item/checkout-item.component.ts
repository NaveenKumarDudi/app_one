import { Component, OnInit, Input } from '@angular/core';
import { ICart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent implements OnInit {

  @Input('product') product: ICart;

  constructor(
    private cartService: CartService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {

  }

  addItem(product: ICart) {
    this.sharedService.message('success', 'Shopping Cart', 'Item added to cart');
    this.cartService.addToCart(product);
  }

  removeItem(product: ICart) {
    this.sharedService.message('success', 'Shopping Cart', 'Item removed from cart');
    this.cartService.removeFromCart(product);
  }

  clearItem(product: ICart) { 
    this.sharedService.message('success', 'Shopping Cart', 'Item removed from cart');
    this.cartService.clearItemFromCart(product);
  }

}
