import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ICategory } from '../models/Category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import * as fromSelector from '../store/selectors/shop.selector';
import { getCategories } from '../store/actions/shop.actions';
import { catchError } from 'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
    @Inject('BASE_API') private baseApi: string,
    @Inject('CLIENT') private clientId: string,
    @Inject('SHOP') private shopId: string,
    private http: HttpClient,
    private store: Store<fromStore.State>
  ) { }

  _getCategories(): Observable<ICategory []> {
    return this.http.get<ICategory []>(
      this.baseApi + 'categories?clientId=' 
      + this.clientId + '&shopId='
      + this.shopId
    ).pipe(
      catchError(err => this._handleError(err))
    )
  }

  getCategoriesFromState() {
    return this.store.select(fromSelector.allCategories);
  }

  fetchCategories () {
    this.store.dispatch(getCategories());
  }

  generateProducts() {
    let a = new Array(20);
    for (let i = 0; i < a.length; i++) {
        const minCat = 5;
        const maxCat = 100;
        const minPrice = 100;
        const maxPrice = 2000;
        const randomCategory = Math.floor(Math.random() * (+maxCat - +minCat)) + +minCat;
        const randomStock = Math.floor((Math.random() * 1000) % 2);
        const randomPrice = (Math.random() * (+maxPrice - +minPrice)) + +minPrice;
        a[i] = {
            "id": 1000 + i + 1,
            "categoryId": `Category ${randomCategory}`,
            "name": `Product ${i + 1}`,
            "imagePath": `https://picsum.photos/400?image=${Math.floor(Math.random() * 1000)}`,
            "stockQuantity": !!randomStock,
            "price": randomPrice.toFixed(3)
        }
    }
    return a;
  }

  _handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(null);
  }

}
