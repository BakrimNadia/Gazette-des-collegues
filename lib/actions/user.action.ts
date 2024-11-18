import { createAction } from '@reduxjs/toolkit';

export const actionSetUser = createAction<{
  name:
    | 'email'
    | 'lastname'
    | 'firstname'
    | 'password'
    | 'role';
  value: string;
}>('user/SET_USER');

export const actionSetUserId = createAction<number>('user/SET_USER_ID');

export const actionSetConfirmPassword = createAction<string>(
  'user/SET_CONFIRM_PASSWORD'
);

export const actionSetUserFromLogin = createAction<{
  id: number;
  email: string;
  lastname: string;
  firstname: string;
  role: string;
}>('user/SET_USER_FROM_LOGIN');
