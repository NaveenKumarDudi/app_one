import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss']
})
export class CartDropdownComponent implements OnInit {

  @Output('toggleDropdown') toggleDropdown = new EventEmitter<any>();

  cartItems: any;

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(
      (data) => {
        if (data) {
          this.cartItems = data
        }
      }
    )
  }


  navigateToCheckout() {
    this.toggleDropdown.emit();
    this.router.navigate(['checkout']);
  }

}
