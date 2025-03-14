import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios/axios';
import { RootState } from '../store';

// action pour afficher la liste des articles
const actionThunkArticleList = createAsyncThunk(
  'article/GET_ARTICLE_LIST',
  async () => {
    const response = await axiosInstance.get('/article');
    return response.data;
  }
);

const actionThunkArticleById = createAsyncThunk(
  'article/GET_ARTICLE_BY_ID',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.get(
      `/article/${state.article.article.id}`
    );
    console.log(response.data);

    return response.data;
  }
);

// action pour ajouter un article
const actionThunkAddArticle = createAsyncThunk(
  'article/ADD_ARTICLE',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.post('/article', {
      picture: state.article.article.picture,
      title: state.article.article.title,
      subtitle: state.article.article.subtitle,
      articleAuthor: state.article.article.articleAuthor,
      content: state.article.article.content,
      date_publication: state.article.article.date_publication,
      user_id: state.article.article.user_id,
    });
    return 'add succesfull';
  }
);

// action pour modifier un article
const actionThunkUpdateArticle = createAsyncThunk(
  'article/UPDATE_ARTICLE',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.patch(
      `/article/${state.article.article.id}`,
      {
        picture: state.article.article.picture,
        title: state.article.article.title,
        subtitle: state.article.article.subtitle,
        articleAuthor: state.article.article.articleAuthor,
        content: state.article.article.content,
        date_publication: state.article.article.date_publication,
        user_id: state.article.article.user_id,
      }
    );
    console.log(response.data);
    return response.data;
  }
);

const actionThunkDeleteArticle = createAsyncThunk(
  'article/DELETE_ARTICLE',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.delete(`/article/${state.article.article.id}`);
    return state.article.article.id;
  }
);

export {
    actionThunkArticleList,
    actionThunkArticleById,
    actionThunkAddArticle,
    actionThunkUpdateArticle,
    actionThunkDeleteArticle,
};