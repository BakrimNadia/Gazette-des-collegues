import { createReducer } from '@reduxjs/toolkit';
import { ICategory } from '../../@types/category';

import { actionSetCategory, actionSetCategoryId } from '../actions/category.action';
import { 
  actionThunkAddCategory, 
  actionThunkDeleteCategory, 
  actionThunkCategoryById, 
  actionThunkCategoryList, 
  actionThunkUpdateCategory 
} from '../thunks/category.thunk';

// -- LE STATE INITIAL
interface InitialState {
  categoryList: ICategory[];
  category: ICategory;
  isloading: boolean;
  error: string | null;
  deleted: boolean;
  isAdded: boolean;
  isEdited: boolean;
}

const initialState: InitialState = {
  categoryList: [],
  category: {
    id: 0,
    name:'',
  },
  isloading: true,
  error: null,
  deleted: false,
  isAdded: false,
  isEdited: false,
};

const categoryReducer = createReducer(initialState, (builder) => {
  builder
    
    .addCase(actionSetCategory, (state, action) => {
      if (action.payload.name in state.category) {
        (state.category as Record<string, unknown>)[action.payload.name] = action.payload.value;
      }
    })
  
    .addCase(actionSetCategoryId, (state, action) => {
      state.category.id = action.payload;
    })
    // Fetch category list (GET)
    .addCase(actionThunkCategoryList.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkCategoryList.fulfilled, (state, action) => {
      state.isloading = false;
      state.categoryList = action.payload;
    })
    .addCase(actionThunkCategoryList.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la récupération de la liste des categorie';
    })
    // Fetch category by ID (GET by ID)
    .addCase(actionThunkCategoryById.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkCategoryById.fulfilled, (state, action) => {
      state.isloading = false;
      state.category = action.payload;
    })
    .addCase(actionThunkCategoryById.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la récupération de la catégorie';
    })
    // Add category (POST)
    .addCase(actionThunkAddCategory.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkAddCategory.fulfilled, (state) => {
      state.isloading = false;
      state.isAdded = true;
      // Reset the current category state
      state.category = {
        id: 0,
        name: '',
      };
    })
    .addCase(actionThunkAddCategory.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de l\'ajout de la catégorie';
    })
    // Update category (PATCH)
    .addCase(actionThunkUpdateCategory.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkUpdateCategory.fulfilled, (state) => {
      state.isloading = false;
      state.isEdited = true;
      // Reset the current category state after editing
      state.category = {
        id: 0,
        name: '',
      };
    })
    .addCase(actionThunkUpdateCategory.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la mise à jour de la categorie';
    })
    // Delete category (DELETE)
    .addCase(actionThunkDeleteCategory.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkDeleteCategory.fulfilled, (state, action) => {
      state.isloading = false;
      // Remove the deleted category from the categoryList based on its ID
      state.categoryList = state.categoryList.filter(category => category.id !== action.payload);
      state.deleted = true;
    })
    .addCase(actionThunkDeleteCategory.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la suppression de la categorie';
    });
});

export default categoryReducer;
