import { IUser } from '../../@types/user';
import { createReducer } from '@reduxjs/toolkit';
import {
  actionThunkUserById,
  actionThunkUserList,
  actionUserSoftDelete,
} from '../thunks/user.thunk';
import {
  actionSetConfirmPassword,
  actionSetUser,
  actionSetUserId,
} from '../actions/user.action';

interface InitialState {
  users: IUser[];
  deletedUsers: IUser[];
  user: IUser;
  confirmPassword: string;
  isloading: boolean;
  error: string | null;
  remove: boolean;
}

const initialState: InitialState = {
  users: [],
  deletedUsers: [],
  user: {
    id: 0,
    email: '',
    lastname: '',
    firstname: '',
    password: '',
    role: '',
  },
  confirmPassword: '',
  isloading: true,
  error: null,
  remove: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSetUser, (state, action) => {
      state.user[action.payload.name] = action.payload.value;
    })
    .addCase(actionSetUserId, (state, action) => {
      state.user.id = action.payload;
    })
    .addCase(actionSetConfirmPassword, (state, action) => {
      state.confirmPassword = action.payload;
    })
    // Get user list
    .addCase(actionThunkUserList.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkUserList.fulfilled, (state) => {
      state.isloading = false;
    })
    .addCase(actionThunkUserList.rejected, (state) => {
      state.isloading = false;
    })
    .addCase(actionThunkUserById.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkUserById.fulfilled, (state, action) => {
      state.isloading = false;
      state.user = action.payload;
    })
    .addCase(actionThunkUserById.rejected, (state) => {
      state.isloading = false;
    })
    .addCase(actionUserSoftDelete.fulfilled, (state) => {
      state.remove = true;
      state.user = {
        id: 0,
        email: '',
        lastname: '',
        firstname: '',
        password: '',
        role: '',
      };
    });
});

export default userReducer;