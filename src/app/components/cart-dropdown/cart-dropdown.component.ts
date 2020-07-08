import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.scss']
})
export class CartDropdownComponent implements OnInit {

  @Output('toggleDropdown') toggleDropdown = new EventEmitter<any>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }



  navigateToCheckout() {
    this.toggleDropdown.emit();
    this.router.navigate(['checkout']);
  }

}
