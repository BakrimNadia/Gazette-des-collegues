import { createAction } from '@reduxjs/toolkit';

export const actionCreateNews = createAction<string>('news/CREATE_NEWS');

export const actionSetNewsId = createAction<number>('news/SET_NEWS_ID');

export const actionSetNews = createAction<{
  name:
    | 'picture'
    | 'title'
    | 'subtitle'
    | 'author'
    | 'content'
    | 'date_publication';
  value: string;
}>('news/SET_NEWS');

export const actionDeleteNews = createAction<string>('news/DELETE_NEWS');