import { combineReducers } from 'redux';
import navigation from './navigation.slice';
import paletteEditor from './paletteEditor.slice';

export default combineReducers({
  navigation,
  paletteEditor
})