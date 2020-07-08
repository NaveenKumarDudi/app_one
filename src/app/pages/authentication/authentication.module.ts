import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { SigninModule } from 'src/app/components/signin/signin.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SignupModule } from 'src/app/components/signup/signup.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SigninModule,
    SignupModule,
    NzGridModule
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
