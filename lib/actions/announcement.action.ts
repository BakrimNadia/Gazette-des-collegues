import { createAction } from '@reduxjs/toolkit';

export const actionSetAnnouncementId = createAction<number>('Announcement/SET_ANNOUNCEMENT_ID');

export const actionSetAnnouncement = createAction<{
  name:
    | 'picture'
    | 'title'
    | 'price'
    | 'author'
    | 'content'
    | 'date_publication'
    | 'category_id';
  value: string;
}>('announcement/SET_ANNOUNCEMENT');

export const actionDeleteAnnouncement = createAction<number>('announcement/DELETE_ANNOUNCEMENT');