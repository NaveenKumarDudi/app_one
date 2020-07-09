import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
import { RouterModule } from '@angular/router';
import { NzMessageModule } from 'ng-zorro-antd/message';



@NgModule({
  declarations: [
    CartItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CartItemComponent
  ]
})
export class CartItemModule { }
