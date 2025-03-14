import { IUser } from '../../@types/user';
import { createReducer } from '@reduxjs/toolkit';
import {
  actionThunkUpdateUser,
  actionThunkUserById,
  actionThunkUserList,

  actionUserSoftDelete,
} from '../thunks/user.thunk';
import {
  actionSetConfirmPassword,
  actionSetUser,
  actionSetUserFromLogin,
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
    is_active: true,
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
    .addCase(actionThunkUserList.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkUserList.fulfilled, (state, action) => {
      state.isloading = false;
      console.log("Données des utilisateurs récupérées :", action.payload);
      state.deletedUsers = action.payload.filter(
        (user: IUser) => user.is_active === false
      );
      state.users = action.payload.filter(
        (user: IUser) => user.is_active === true
      );
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
    .addCase(actionSetUserFromLogin, (state, action) => {
  state.user = {
    ...state.user,
    id: action.payload.id,
    email: action.payload.email,
    lastname: action.payload.lastname,
    firstname: action.payload.firstname,
    role: action.payload.role,
    is_active: true, 
  };
})

    .addCase(actionThunkUpdateUser.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkUpdateUser.fulfilled, (state) => {
      state.isloading = false;
      state.user = {
        id: 0,
        email: '',
        lastname: '',
        firstname: '',
        password: '',
        role: '',
        is_active: true,
      };
    })
    .addCase(actionThunkUpdateUser.rejected, (state) => {
      state.isloading = false;
      state.error = 'Erreur lors de la mise à jour de l\'utilisateur';
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
        is_active: true,
      };
    });
});

export default userReducer;