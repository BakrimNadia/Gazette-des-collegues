import { createAction } from '@reduxjs/toolkit';

export const actionSetCategoryId = createAction<number>('Category/SET_CATEGORY_ID');

export const actionSetCategory = createAction<{
  name:
 | 'name';
  value: string;
}>('category/SET_CATEGORY');

export const actionDeleteCategory = createAction<number>('category/DELETE_CATEGORY');