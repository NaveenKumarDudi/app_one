import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CartDropdownModule } from '../cart-dropdown/cart-dropdown.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CartDropdownModule,
    NzIconModule,
    NzDrawerModule,
    NzMenuModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
