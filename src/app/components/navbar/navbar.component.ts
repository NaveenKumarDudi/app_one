import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  visible: boolean = false;
  isAuthenticated: boolean = false;
  cartDropdown: boolean = false; 
  totalItems: number = 0;

  constructor(
    private userService: UserService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.userService.getIsAuthenticated().subscribe(
      data => this.isAuthenticated = data
    );

    this.cartService.getCartItems().subscribe(
      (data) => {
        this.totalItems = 0;
        data.forEach(
          (item) => {
            this.totalItems += item.quantity;
          }
        )
      }
    )

  }

  toggleDropdown() {
    this.cartDropdown = !this.cartDropdown;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
