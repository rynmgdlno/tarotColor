import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  palettes: []
}

export const palettes = createSlice({
  name: 'palettes',
  initialState,
  reducers: {
    setSavedPalettes: (state, action) => {
      state.palettes = action.payload
    }
  }
})

export const { setSavedPalettes } = palettes.actions;
export default palettes.reducer;