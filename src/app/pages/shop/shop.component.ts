import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: any = [];

  constructor(
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
    this.products = this.shopService.generateProducts();
  }

}
