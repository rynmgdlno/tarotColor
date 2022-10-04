import { createSlice } from '@reduxjs/toolkit';

import { ColorObj } from '@types';
import { getRandomColorObj } from '@utils';

type NavigationState = {
  activeEditor: number | null;
  paletteData: ColorObj[];
}

const initialState: NavigationState = { 
  activeEditor: null,
  paletteData: getRandomColorObj()
};

export const paletteEditorSlice = createSlice({
  name: 'paletteEditor',
  initialState,
  reducers: { 
    setPaletteData: (state, action) => {
      state.paletteData = action.payload
    },
    setActiveEditor: (state, action) => {
      state.activeEditor = action.payload;
    },
  }
})

export const { setPaletteData, setActiveEditor } = paletteEditorSlice.actions;

export default paletteEditorSlice.reducer