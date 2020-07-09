import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input('cartItem') cartItem: any;

  @Output('notifier') notifier = new EventEmitter<{type: string, title: string, message: string}>();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }



}
