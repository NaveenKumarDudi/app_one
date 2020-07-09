import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDropdownComponent } from './cart-dropdown.component';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CartItemModule } from '../cart-item/cart-item.module';



@NgModule({
  declarations: [
    CartDropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzButtonModule,
    CartItemModule
  ],
  exports: [
    CartDropdownComponent
  ]
})
export class CartDropdownModule { }
