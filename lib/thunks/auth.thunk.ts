import { createAsyncThunk } from '@reduxjs/toolkit';

import { addTokenPseudoAndRoleToLocalStorage } from '../../localStorage/localStorage';

import axiosInstance, { addTokenJwtToAxiosInstance } from '../axios/axios';
import { RootState } from '../store';
import { actionThunkUserList } from './user.thunk';
import { actionSetUserFromLogin } from '../actions/user.action';

const actionLoginCheck = createAsyncThunk(
  'login/LOGIN_CHECK',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.post('/auth/login', {
      email: state.auth.credentials.email,
      password: state.auth.credentials.password,
    });
    const { token, avatar, lastname, firstname, role, id, email } = response.data;

    const pseudo = firstname + ' ' + lastname;

    addTokenJwtToAxiosInstance(token);
    if (state.auth.remember) {
      addTokenPseudoAndRoleToLocalStorage(token, pseudo, role, avatar);
    }

   thunkAPI.dispatch(
  actionSetUserFromLogin({ id, email, lastname, firstname, role })
); 
    return { token, pseudo, role, avatar };
  }
);




const actionRegister = createAsyncThunk(
  'login/REGISTER',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.post('/auth/register', {
      email: state.user.user.email,
      lastname: state.user.user.lastname,
      firstname: state.user.user.firstname,
      password: state.user.user.password,
      confirmPassword: state.user.confirmPassword,
      role: state.user.user.role,
      is_active: state.user.user.is_active,
    });

    await thunkAPI.dispatch(actionThunkUserList()); 
    return 'succes';
  }
);

export { actionLoginCheck, actionRegister };