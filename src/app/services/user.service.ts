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
    return this.http.post<IUser>(
      this.baseAuth + 'customer/login',
      user
    ).pipe(
      catchError(err => this._handleError(err))
    );
  }

  _register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(
      this.baseAuth + 'customer/register',
      user
    ).pipe(
      catchError(err => this._handleError(err))
    );
  }

  login(userObject: IUser) {
    let user = {...userObject};
    user.shopId = this.shopId;
    user.clientId = this.clientId;
    this.store.dispatch(UserActions.startLogin({user}));
  }

  register(userObject: IUser) {
    let user = {...userObject};
    user.shopId = this.shopId;
    user.clientId = this.clientId;
    this.store.dispatch(UserActions.startRegister({user}));
  }

  _handleError(err: HttpErrorResponse) {
    console.log(err);
    let customError = {...this.errorInstance};
    customError.status = err.status;
    customError.friendly = err.message;
    customError.message = err.message;
    if (err.error?.status === 'INVALID_PASSWORD') {
      customError.friendly = 'Invalid credentials';
    }
    if (err.error?.status === 'USER_NOT_FOUND') {
      customError.friendly = 'No user found with this email!';
    }
    return throwError(customError);
  }

}
