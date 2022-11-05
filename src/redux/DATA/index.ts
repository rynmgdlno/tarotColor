import { combineReducers } from 'redux';
import api from './api.slice';
import user from './user.slice';

// import modals from './modals'

export default combineReducers({
  // modals,
  api,
  user
})