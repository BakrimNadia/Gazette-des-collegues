import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios/axios';
import { RootState } from '../store';

// action pour afficher la liste des informations
const actionThunkNewsList = createAsyncThunk(
  'news/GET_NEWS_LIST',
  async () => {
    const response = await axiosInstance.get('/news');
    return response.data;
  }
);

const actionThunkNewsById = createAsyncThunk(
  'news/GET_NEWS_BY_ID',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.get(
      `/news/${state.news.news.id}`
    );
    console.log(response.data);

    return response.data;
  }
);

// action pour ajouter une information
const actionThunkAddNews = createAsyncThunk(
  'news/ADD_NEWS',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.post('/news', {
      title: state.news.news.title,
      subtitle: state.news.news.subtitle,
      content: state.news.news.content,
      newsAuthor: state.news.news.newsAuthor,
      date_publication: state.news.news.date_publication,
    });
    return 'add succesfull';
  }
);

// action pour modifier une information
const actionThunkUpdateNews = createAsyncThunk(
  'news/UPDATE_NEWS',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.patch(
      `/news/${state.news.news.id}`,
      {
        title: state.news.news.title,
        subtitle: state.news.news.subtitle,
        content: state.news.news.content,
        newsAuthor: state.news.news.newsAuthor,
        date_publication: state.news.news.date_publication,
      }
    );
    console.log(response.data);
    return response.data;
  }
);

const actionThunkDeleteNews = createAsyncThunk(
  'news/DELETE_NEWS',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.delete(`/news/${state.news.news.id}`);
    return state.news.news.id;
  }
);

export {
    actionThunkNewsList,
    actionThunkNewsById,
    actionThunkAddNews,
    actionThunkUpdateNews,
    actionThunkDeleteNews,
};