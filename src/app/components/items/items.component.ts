import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICart } from 'src/app/models/Cart';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input('product') product: any;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    
  }

  addItemToCart(product: ICart) {
    this.cartService.addToCart(product);
  }

}
