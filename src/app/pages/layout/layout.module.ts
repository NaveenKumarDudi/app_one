import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { LayoutComponent } from './layout.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    FooterModule,
    FooterModule,
    NzGridModule,
    NzIconModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
