import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios/axios';
import { RootState } from '../store';

// action pour afficher la liste des catégories
const actionThunkCategoryList = createAsyncThunk(
  'category/GET_CATEGORY_LIST',
  async () => {
    const response = await axiosInstance.get('/category');
    return response.data;
  }
);

const actionThunkCategoryById = createAsyncThunk(
  'category/GET_CATEGORY_BY_ID',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.get(
      `/category/${state.category.category.id}`
    );
    console.log(response.data);

    return response.data;
  }
);

// action pour ajouter une catégorie
const actionThunkAddCategory = createAsyncThunk(
  'category/ADD_CATEGORY',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.post('/category', {
      name: state.category.category.name,
    });
    return 'add succesfull';
  }
);

// action pour modifier une catégorie
const actionThunkUpdateCategory = createAsyncThunk(
  'category/UPDATE_CATEGORY',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.patch(
      `/category/${state.category.category.id}`,
      {
        name: state.category.category.name,
      }
    );
    console.log(response.data);
    return response.data;
  }
);

const actionThunkDeleteCategory = createAsyncThunk(
  'category/DELETE_CATEGORY',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.delete(`/category/${state.category.category.id}`);
    return state.category.category.id;
  }
);

export {
    actionThunkCategoryList,
    actionThunkCategoryById,
    actionThunkAddCategory,
    actionThunkUpdateCategory,
    actionThunkDeleteCategory,
};