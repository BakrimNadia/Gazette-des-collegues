import { createReducer } from '@reduxjs/toolkit';

import { INews } from '../../@types/news';

import { actionDeleteNews, actionSetNews, actionSetNewsId } from '../actions/news.action';
import { actionThunkAddNews, actionThunkDeleteNews, actionThunkNewsById, actionThunkNewsList, actionThunkUpdateNews } from '../thunks/news.thunk';

// -- LE STATE INITIAL
interface InitialState {
    newsList: INews[];
    newsDeletedList: INews[];
    news: INews;
    isloading: boolean;
    error: string | null;
    deleted: boolean;
    isAdded: boolean;
    isEdited: boolean;
  }
  
  const initialState: InitialState = {
    newsList: [],
    newsDeletedList: [],
    news: {
      id: 0,
      picture: '',
      title: '',
      subtitle: '',
      author: '',
      content: '',
      date_publication: '',
    },
    isloading: true,
    error: null,
    deleted: false,
    isAdded: false,
    isEdited: false,
  };
  
  const newsReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(actionSetNews, (state, action) => {
        state.news[action.payload.name] = action.payload.value;
      })
      // Get news list
      .addCase(actionThunkNewsList.pending, (state) => {
        state.isloading = true;
      })
      .addCase(actionThunkNewsList.fulfilled, (state) => {
        state.isloading = false;
      })
      .addCase(actionThunkNewsList.rejected, (state) => {
        state.isloading = false;
      })
      // Get news by id
      .addCase(actionSetNewsId, (state, action) => {
        state.news.id = action.payload;
      })
      .addCase(actionThunkNewsById.pending, (state) => {
        state.isloading = true;
      })
      .addCase(actionThunkNewsById.fulfilled, (state, action) => {
        state.isloading = false;
        state.news = action.payload;
      })
      .addCase(actionThunkNewsById.rejected, (state) => {
        state.isloading = false;
      })
      // Add news
      .addCase(actionThunkAddNews.pending, (state) => {
        state.isloading = true;
      })
      .addCase(actionThunkAddNews.fulfilled, (state) => {
        state.isloading = false;
        state.isAdded = true;
        state.news = {
          id: 0,
          picture: '',
          title: '',
          subtitle: '',
          author: '',
          content: '',
          date_publication: '',
        };
      })
      .addCase(actionThunkAddNews.rejected, (state) => {
        state.isloading = false;
      })
      // Update news
      .addCase(actionThunkUpdateNews.pending, (state) => {
        state.isloading = true;
      })
      .addCase(actionThunkUpdateNews.fulfilled, (state) => {
        state.isloading = false;
        state.isEdited = true;
        state.news = {
            id: 0,
            picture: '',
            title: '',
            subtitle: '',
            author: '',
            content: '',
            date_publication: '',
        };
      })
      .addCase(actionThunkUpdateNews.rejected, (state) => {
        state.isloading = false;
        state.error = 'Erreur update';
      })
        // Delete news
        .addCase(actionDeleteNews, (state, action) => {
            state.news.id = action.payload;
          })
      .addCase(actionThunkDeleteNews.fulfilled, (state) => {
        state.isloading = false;
        state.deleted = true;
      })
      .addCase(actionThunkDeleteNews.pending, (state) => {
        state.isloading = true;
      })
      .addCase(actionThunkDeleteNews.rejected, (state) => {
        state.error = 'Erreur';
      });
  });
  
  export default newsReducer;