import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';
import { ItemsModule } from 'src/app/components/items/items.module';
import { NzGridModule } from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ItemsModule,
    NzGridModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
