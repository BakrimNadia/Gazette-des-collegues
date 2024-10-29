import { createReducer } from '@reduxjs/toolkit';
import { IAnnouncement } from '../../@types/announcement';

import { actionSetAnnouncement, actionSetAnnouncementId } from '../actions/announcement.action';
import { 
    actionThunkAnnouncementList,
    actionThunkAnnouncementById,
    actionThunkAddAnnouncement,
    actionThunkUpdateAnnouncement,
    actionThunkDeleteAnnouncement,
} from '../thunks/announcement.thunk';

// -- LE STATE INITIAL
interface InitialState {
    announcementList: IAnnouncement[];
    announcement: IAnnouncement;
    isloading: boolean;
    error: string | null;
    deleted: boolean;
    isAdded: boolean;
    isEdited: boolean;
}

const initialState: InitialState = {
    announcementList: [],
    announcement: {
    id: 0,
    picture: '',
    title: '',
    subtitle: '',
    author: '',
    content: '',
    date_publication: '',
  },
  isloading: true,
  error: null,
  deleted: false,
  isAdded: false,
  isEdited: false,
};

const announcementReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSetAnnouncement, (state, action) => {
      state.announcement[action.payload.name] = action.payload.value;
    })
    .addCase(actionSetAnnouncementId, (state, action) => {
      state.announcement.id = action.payload;
    })
    .addCase(actionThunkAnnouncementList.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkAnnouncementList.fulfilled, (state, action) => {
      state.isloading = false;
      state.announcementList = action.payload;
    })
    .addCase(actionThunkAnnouncementList.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la récupération de la liste d annonces';
    })
    .addCase(actionThunkAnnouncementById.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkAnnouncementById.fulfilled, (state, action) => {
      state.isloading = false;
      state.announcement = action.payload;
    })
    .addCase(actionThunkAnnouncementById.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la récupération de l\'annonce';
    })
    .addCase(actionThunkAddAnnouncement.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkAddAnnouncement.fulfilled, (state) => {
      state.isloading = false;
      state.isAdded = true;
      state.announcement = {
        id: 0,
        picture: '',
        title: '',
        subtitle: '',
        author: '',
        content: '',
        date_publication: '',
      };
    })
    .addCase(actionThunkAddAnnouncement.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de l\'ajout de l\'annonce';
    })
    .addCase(actionThunkUpdateAnnouncement.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkUpdateAnnouncement.fulfilled, (state) => {
      state.isloading = false;
      state.isEdited = true;
      state.announcement = {
        id: 0,
        picture: '',
        title: '',
        subtitle: '',
        author: '',
        content: '',
        date_publication: '',
      };
    })
    .addCase(actionThunkUpdateAnnouncement.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la mise à jour de l\'annonce';
    })
    .addCase(actionThunkDeleteAnnouncement.pending, (state) => {
      state.isloading = true;
    })
    .addCase(actionThunkDeleteAnnouncement.fulfilled, (state, action) => {
      state.isloading = false;
      state.announcementList = state.announcementList.filter(announcement => announcement.id !== action.payload);
      state.deleted = true;
    })
    .addCase(actionThunkDeleteAnnouncement.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || 'Erreur lors de la suppression de l\'annonce';
    });
});

export default announcementReducer;
