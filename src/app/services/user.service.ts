import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../models/User';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/Operators'
import { IError } from '../models/Error';
import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import * as fromSelector from '../store/selectors/user.selector';
import * as UserActions from '../store/actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  errorInstance: IError;

  constructor(
    @Inject('BASE_AUTH') private baseAuth: string,
    @Inject('CLIENT') private clientId: string,
    @Inject('SHOP') private shopId: string,
    private http: HttpClient,
    private store: Store<fromStore.State>
  ) { }

  // Selector functions
  getIsAuthenticated() {
    return this.store.select(fromSelector.getIsAuthenticated);
  }

  getErrors() {
    return this.store.select(fromSelector.getError);
  }

  getCurrentUser() {
    return this.store.select(fromSelector.getCurrentUser);
  }

  getLoading() {
    return this.store.select(fromSelector.getLoading);
  }

  _authenticate(user: IUser): Observable<IUser> {
    let modifiedUser = {...user};
    modifiedUser.shopId = this.shopId;
    modifiedUser.clientId = this.clientId;
    return this.http.post<IUser>(
      this.baseAuth + 'customer/login',
      modifiedUser
    ).pipe(
      catchError(err => this._handleError)
    )
  }

  login(user: IUser) {
    this.store.dispatch(UserActions.startLogin({user}));
  }

  _handleError(err: HttpErrorResponse) {
    let customError = {...this.errorInstance};
    return throwError(customError);
  }

}
