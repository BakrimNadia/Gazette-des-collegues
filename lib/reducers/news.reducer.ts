import { createReducer } from '@reduxjs/toolkit';
import { INews } from '../../@types/news';

import { actionSetNews, actionSetNewsId } from '../actions/news.action';
import { 
  actionThunkAddNews, 
  actionThunkDeleteNews, 
  actionThunkNewsById, 
  actionThunkNewsList, 
  actionThunkUpdateNews 
} from '../thunks/news.thunk';

// -- LE STATE INITIAL
interface InitialState {
  newsList: INews[];
  news: INews;
  isloading: boolean;
  error: string | null;
  deleted: boolean;
  isAdded: boolean;
  isEdited: boolean;
}

const initialState: InitialState = {
  newsList: [],
  news: {
    id: 0,
    picture: '',
    title: '',
    subtitle: '',
    newsAuthor: { firstname: '', lastname: '' },
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
    // Set news data (used to update specific fields in the news object)
    .addCase(actionSetNews, (state, action) => {
      if (action.payload.name in state.news) {
        (state.news as Record<string, unknown>)[action.payload.name] = action.payload.value;
      }
    })
    // Set news ID (for retrieving or deleting a specific news item)
    .addCase(actionSetNewsId, (state, action) => {
      state.news.id = action.payload;
    })
    // Fetch news list (GET)
    .addCase(actionThunkNewsList.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkNewsList.fulfilled, (state, action) => {
      state.isloading = false;
      state.newsList = action.payload;
    })
    .addCase(actionThunkNewsList.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la récupération de la liste des news';
    })
    // Fetch news by ID (GET by ID)
    .addCase(actionThunkNewsById.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkNewsById.fulfilled, (state, action) => {
      state.isloading = false;
      state.news = action.payload;
    })
    .addCase(actionThunkNewsById.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la récupération de la news';
    })
    // Add news (POST)
    .addCase(actionThunkAddNews.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkAddNews.fulfilled, (state) => {
      state.isloading = false;
      state.isAdded = true;
      // Reset the current news state
      state.news = {
        id: 0,
        picture: '',
        title: '',
        subtitle: '',
        newsAuthor: { firstname: '', lastname: '' },
        content: '',
        date_publication: '',
      };
    })
    .addCase(actionThunkAddNews.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de l\'ajout de la news';
    })
    // Update news (PATCH)
    .addCase(actionThunkUpdateNews.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkUpdateNews.fulfilled, (state) => {
      state.isloading = false;
      state.isEdited = true;
      // Reset the current news state after editing
      state.news = {
        id: 0,
        picture: '',
        title: '',
        subtitle: '',
        newsAuthor: { firstname: '', lastname: '' },
        content: '',
        date_publication: '',
      };
    })
    .addCase(actionThunkUpdateNews.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la mise à jour de la news';
    })
    // Delete news (DELETE)
    .addCase(actionThunkDeleteNews.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkDeleteNews.fulfilled, (state, action) => {
      state.isloading = false;
      // Remove the deleted news from the newsList based on its ID
      state.newsList = state.newsList.filter(news => news.id !== action.payload);
      state.deleted = true;
    })
    .addCase(actionThunkDeleteNews.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la suppression de la news';
    });
});

export default newsReducer;
