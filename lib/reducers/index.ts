import articleReducer from './article.reducer';
import newsReducer from './news.reducer';
import userReducer from './user.reducer';

const reducer = {
 news: newsReducer,
 user: userReducer,
 article: articleReducer,
  };
  
  export default reducer;