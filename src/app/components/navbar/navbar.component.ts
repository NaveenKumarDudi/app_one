import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  visible: boolean = false;
  isAuthenticated: boolean = false;
  cartDropdown: boolean = false; 

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getIsAuthenticated().subscribe(
      data => this.isAuthenticated = data
    );
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
