import { createAction } from '@reduxjs/toolkit';

export const actionSetNewsId = createAction<number>('news/SET_NEWS_ID');

export const actionSetNews = createAction<{
  name:
    | 'picture'
    | 'title'
    | 'subtitle'
    | 'user_id'
    | 'content'
    | 'date_publication';
  value: string;
}>('news/SET_NEWS');

export const actionDeleteNews = createAction<number>('news/DELETE_NEWS');