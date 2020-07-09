import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICart } from 'src/app/models/Cart';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input('product') product: any;

  constructor(
    private cartService: CartService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    
  }

  addItemToCart(product: ICart) {
    this.sharedService.message('success', 'Shopping Cart', 'Item added to cart');
    this.cartService.addToCart(product);
  }

}
