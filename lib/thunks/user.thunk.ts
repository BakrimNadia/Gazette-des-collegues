import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../axios/axios';
import { RootState } from '../store';

const actionThunkUserList = createAsyncThunk('user/GET_USERS', async () => {
  const response = await axiosInstance.get('/users');
  return response.data;
});

const actionThunkUserById = createAsyncThunk(
  'user/GET_USERS_BY_ID',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.get(`/users/${state.user.user.id}`);
    return response.data;
  }
);

const actionThunkUpdateUser = createAsyncThunk(
  'user/UPDATE_USER',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.patch(`/users/${state.user.user.id}`, {
      firstname: state.user.user.firstname,
      lastname: state.user.user.lastname,
      email: state.user.user.email,
      password: state.user.user.password,
      role: state.user.user.role,
    });
    return 'update succesfull';
  }
);

const actionUserSoftDelete = createAsyncThunk(
  'user/DELETE',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.patch('/user/delete', {
      email: state.user.user.email,
    });
    return 'succesful delete';
  }
);

export { actionThunkUserList, actionThunkUserById, actionThunkUpdateUser, actionUserSoftDelete };