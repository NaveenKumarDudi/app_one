import { createAction, props } from '@ngrx/store';
import { ICategory } from 'src/app/models/Category';

export const GET_CATEGORIES = '[CATEGORIES] GET_CATEGORIES';
export const CATEGORIES_SUCCESS = '[CATEGORIES] CATEGORIES_SUCCESS';

export const getCategories = createAction(
    GET_CATEGORIES
)

export const categoriesSuccess = createAction(
    CATEGORIES_SUCCESS,
    props<{categories: ICategory []}>()
)