import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzGridModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
