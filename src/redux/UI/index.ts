import { combineReducers } from 'redux';
import navigation from './navigation/navigationSlice';
import paletteEditor from './paletteEditor.slice';

export default combineReducers({
  navigation,
  paletteEditor
})