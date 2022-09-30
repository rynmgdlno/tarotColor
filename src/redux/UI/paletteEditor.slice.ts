import { createSlice } from '@reduxjs/toolkit';

import { SingleColor } from '@types';
import { initColor } from './initColor';

type NavigationState = {
  isEditorOpen: boolean;
  paletteData: SingleColor[];
}

const initialState: NavigationState = { 
  isEditorOpen: false,
  paletteData: initColor
};

export const paletteEditorSlice = createSlice({
  name: 'paletteEditor',
  initialState,
  reducers: { 
    setPaletteData: (state, action) => {
      state.paletteData = action.payload
    },
    toggleEditor: (state) => {
      state.isEditorOpen = !state.isEditorOpen;
    },
  }
})

export const { setPaletteData, toggleEditor } = paletteEditorSlice.actions;

export default paletteEditorSlice.reducer