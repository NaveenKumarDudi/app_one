import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutItemComponent } from './checkout-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CheckoutItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CheckoutItemComponent
  ]
})
export class CheckoutItemModule { }
