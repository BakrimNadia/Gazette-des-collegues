import { createAction } from '@reduxjs/toolkit';

export const actionSetArticleId = createAction<number>('article/SET_ARTICLE_ID');

export const actionSetArticle = createAction<{
  name:
    | 'picture'
    | 'title'
    | 'subtitle'
    | 'articleAuthor'
    | 'content'
    | 'date_publication'
    | 'user_id';
  value: string;
}>('article/SET_ARTICLE');

export const actionDeleteArticle = createAction<number>('article/DELETE_ARTICLE');