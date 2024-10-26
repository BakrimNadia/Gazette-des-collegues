import { createAction } from '@reduxjs/toolkit';

export const actionSetArticleId = createAction<number>('article/SET_ARTICLE_ID');

export const actionSetArticle = createAction<{
  name:
    | 'picture'
    | 'title'
    | 'subtitle'
    | 'author'
    | 'content'
    | 'date_publication';
  value: string;
}>('article/SET_ARTICLE');

export const actionDeleteArticle = createAction<number>('article/DELETE_ARTICLE');