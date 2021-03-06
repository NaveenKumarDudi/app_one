import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { LayoutModule } from './pages/layout/layout.module';
import { CheckoutModule } from './pages/checkout/checkout.module';
import { ShopModule } from './pages/shop/shop.module';
import { ShopEffects } from './store/effects/shop.effects';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    LayoutModule,
    CheckoutModule,
    ShopModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('State', reducers, {
      metaReducers: [...metaReducers]
    }),
    EffectsModule.forRoot([
      UserEffects,
      ShopEffects
    ]),
    FormsModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzNotificationModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: 'BASE_API', useValue: environment.baseApi },
    { provide: 'BASE_AUTH', useValue: environment.baseAuth },
    { provide: 'CLIENT', useValue: environment.clientId },
    { provide: 'SHOP', useValue: environment.shopId }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
