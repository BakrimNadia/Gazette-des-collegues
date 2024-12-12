import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios/axios';
import { RootState } from '../store';

// action pour afficher la liste des annonces
const actionThunkAnnouncementList = createAsyncThunk(
  'announcement/GET_ANNOUNCEMENT_LIST',
  async () => {
    const response = await axiosInstance.get('/announcement');
    return response.data;
  }
);

const actionThunkAnnouncementById = createAsyncThunk(
  'announcement/GET_ANNOUNCEMENT_BY_ID',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.get(
      `/announcement/${state.announcement.announcement.id}`
    );
    console.log(response.data);

    return response.data;
  }
);

// action pour ajouter une annonce
const actionThunkAddAnnouncement = createAsyncThunk(
  'announcement/ADD_ANNOUNCEMENT',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.post('/announcement', {
      title: state.announcement.announcement.title,
      price: state.announcement.announcement.price,
      author: state.announcement.announcement.author,
      content: state.announcement.announcement.content,
      date_publication: state.announcement.announcement.date_publication,
      category: state.announcement.announcement.category_id,
    });
    return 'add succesfull';
  }
);

// action pour modifier une annonce
const actionThunkUpdateAnnouncement = createAsyncThunk(
  'announcement/UPDATE_ANNOUCEMENT',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.patch(
      `/announcement/${state.announcement.announcement.id}`,
      {
        title: state.announcement.announcement.title,
        price: state.announcement.announcement.price,
        author: state.announcement.announcement.author,
        content: state.announcement.announcement.content,
        date_publication: state.announcement.announcement.date_publication,
        category: state.announcement.announcement.category_id,
      }
    );
    console.log(response.data);
    return response.data;
  }
);
// action pour supprimer une annonce
const actionThunkDeleteAnnouncement = createAsyncThunk(
  'announcement/DELETE_ANNOUCEMENT',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    await axiosInstance.delete(`/announcement/${state.announcement.announcement.id}`);
    return state.announcement.announcement.id;
  }
);

export {
    actionThunkAnnouncementList,
    actionThunkAnnouncementById,
    actionThunkAddAnnouncement,
    actionThunkUpdateAnnouncement,
    actionThunkDeleteAnnouncement,
};