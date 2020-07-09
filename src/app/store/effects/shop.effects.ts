import { Injectable } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as ShopActions from '../actions/shop.actions';
import { exhaustMap, map } from 'rxjs/Operators';

@Injectable()
export class ShopEffects {

    constructor(
        private action: Actions,
        private shopService: ShopService
    ) {}

    categories$ = createEffect(
        () => this.action.pipe(
            ofType(ShopActions.getCategories),
            exhaustMap(action => 
                this.shopService._getCategories()
                    .pipe(
                        map(categories => ShopActions.categoriesSuccess({categories}))
                    )
            )
        )
    );

}