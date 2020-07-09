import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
import { CheckoutItemModule } from 'src/app/components/checkout-item/checkout-item.module';
import { NzGridModule } from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CheckoutItemModule,
    NzGridModule
  ],
  exports: [
    CheckoutComponent
  ]
})
export class CheckoutModule { }
