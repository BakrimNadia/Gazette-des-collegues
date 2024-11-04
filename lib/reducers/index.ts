import announcementReducer from './announcement.reducer';
import articleReducer from './article.reducer';
import newsReducer from './news.reducer';
import userReducer from './user.reducer';
import authReducer from './auth.reducer';

const reducer = {
 news: newsReducer,
 user: userReducer,
 article: articleReducer,
 announcement: announcementReducer,
 auth : authReducer,
  };
  
  export default reducer;