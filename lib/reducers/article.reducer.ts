import { createReducer } from '@reduxjs/toolkit';
import { IArticle } from '../../@types/article';

import { actionSetArticle, actionSetArticleId } from '../actions/article.action';
import { 
    actionThunkArticleList,
    actionThunkArticleById,
    actionThunkAddArticle,
    actionThunkUpdateArticle,
    actionThunkDeleteArticle,
} from '../thunks/article.thunk';

// -- LE STATE INITIAL
interface InitialState {
  articleList: IArticle[];
  article: IArticle;
  isloading: boolean;
  error: string | null;
  deleted: boolean;
  isAdded: boolean;
  isEdited: boolean;
}

const initialState: InitialState = {
  articleList: [],
  article: {
    id: 0,
    picture: '',
    title: '',
    subtitle: '',
    articleAuthor: { firstname: '', lastname: '' },
    content: '',
    date_publication: '',
    user_id: 0,
  },
  isloading: true,
  error: null,
  deleted: false,
  isAdded: false,
  isEdited: false,
};

const articleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSetArticle, (state, action) => {
      if (action.payload.name in state.article) {  
      (state.article as  Record<string, unknown>)[action.payload.name] = action.payload.value;
      }
    })
    .addCase(actionSetArticleId, (state, action) => {
      state.article.id = action.payload;
    })
    .addCase(actionThunkArticleList.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkArticleList.fulfilled, (state, action) => {
      state.isloading = false;
      state.articleList = action.payload;
    })
    .addCase(actionThunkArticleList.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la récupération de la liste d articles';
    })
    .addCase(actionThunkArticleById.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkArticleById.fulfilled, (state, action) => {
      state.isloading = false;
      state.article = action.payload;
    })
    .addCase(actionThunkArticleById.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la récupération de l article';
    })
    .addCase(actionThunkAddArticle.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkAddArticle.fulfilled, (state) => {
      state.isloading = false;
      state.isAdded = true;
      state.article = {
        id: 0,
        picture: '',
        title: '',
        subtitle: '',
        articleAuthor: { firstname: '', lastname: '' },
        content: '',
        date_publication: '',
        user_id: 0,
      };
    })
    .addCase(actionThunkAddArticle.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de l\'ajout de l\'article';
    })
    .addCase(actionThunkUpdateArticle.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkUpdateArticle.fulfilled, (state) => {
      state.isloading = false;
      state.isEdited = true;
      state.article = {
        id: 0,
        picture: '',
        title: '',
        subtitle: '',
        articleAuthor: { firstname: '', lastname: '' },
        content: '',
        date_publication: '',
        user_id: 0,
      };
    })
    .addCase(actionThunkUpdateArticle.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la mise à jour de l\'article';
    })
    .addCase(actionThunkDeleteArticle.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkDeleteArticle.fulfilled, (state, action) => {
      state.isloading = false;
      state.articleList = state.articleList.filter(article => article.id !== action.payload);
      state.deleted = true;
    })
    .addCase(actionThunkDeleteArticle.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la suppression de l article';
    });
});

export default articleReducer;
