import { combineReducers } from 'redux';
import searchnews from './searchnews';
import topnews from './topnews';
import bookmarks from './bookmarks';

export default combineReducers({
  searchnews,
  topnews,
  bookmarks
});