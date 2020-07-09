import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICart } from 'src/app/models/Cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItems: ICart [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(
      (data) => {
        if (data) {
          this.cartItems = data;
        }
      }
    );
  }

}
