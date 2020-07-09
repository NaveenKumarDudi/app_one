import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';
import { ItemsModule } from 'src/app/components/items/items.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ItemsModule,
    FormsModule,
    NzGridModule,
    NzCheckboxModule,
    NzDrawerModule,
    NzIconModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
