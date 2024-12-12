import announcementReducer from './announcement.reducer';
import articleReducer from './article.reducer';
import newsReducer from './news.reducer';
import userReducer from './user.reducer';
import authReducer from './auth.reducer';
import categoryReducer from './category.reducer';

const reducer = {
 news: newsReducer,
 user: userReducer,
 article: articleReducer,
 announcement: announcementReducer,
 auth : authReducer,
 category: categoryReducer,
  };
  
  export default reducer;