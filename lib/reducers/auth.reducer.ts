import { createReducer } from '@reduxjs/toolkit';

import { addTokenPseudoAndRoleToLocalStorage } from '../../localStorage/localStorage';

import {
  actionChangeCredential,
  actionLogIn,
  actionLogOut,
  actionRememberMe,
} from '../actions/auth.action';
import { actionLoginCheck, actionRegister } from '../thunks/auth.thunk';

interface InitialState {
  credentials: {
    email: string;
    password: string;
  };
  remember: boolean;
  pseudo: string;
  token: string;
  avatar: string;
  role: string;
  error: string;
  isloading: boolean;
  message: string;
  modified: boolean;
}

const initialState: InitialState = {
  credentials: {
    email: '',
    password: '',
  },
  remember: false,
  pseudo: '',
  token: '',
  avatar: '',
  role: '',
  error: '',
  isloading: false,
  message: '',
  modified: false,
};

const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionChangeCredential, (state, action) => {
      state.credentials[action.payload.name] = action.payload.value;
    })
    .addCase(actionRememberMe, (state, action) => {
      state.remember = action.payload;
    })
    .addCase(actionLoginCheck.pending, (state) => {
      state.isloading = true;
      state.error = '';
    })
    .addCase(actionLoginCheck.fulfilled, (state, action) => {
      state.isloading = false;
      state.token = action.payload.token;
      state.pseudo = action.payload.pseudo;
      state.role = action.payload.role;
      state.avatar = action.payload.avatar;
      state.error = '';
    })
    .addCase(actionLoginCheck.rejected, (state) => {
      state.error = 'erreur de connexion';
    })
    .addCase(actionLogOut, (state) => {
      state.role = '';
      state.pseudo = '';
      state.token = '';
      state.avatar = '';
      addTokenPseudoAndRoleToLocalStorage(
        state.token,
        state.pseudo,
        state.role,
        state.avatar
      );
    })
    .addCase(actionLogIn, (state, action) => {
      state.token = action.payload.jwt;
      state.pseudo = action.payload.pseudo;
      state.role = action.payload.role;
      state.avatar = action.payload.avatar;
    })
    .addCase(actionRegister.fulfilled, (state) => {
      state.message = 'Utilisateur ajouté avec succes';
      state.modified = true;
    })
    .addCase(actionRegister.pending, (state) => {
      state.message = 'Loading ...';
    })
    .addCase(actionRegister.rejected, (state) => {
      state.message = 'Erreur ...';
    });
});

export default loginReducer;