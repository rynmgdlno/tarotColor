import { createSlice } from '@reduxjs/toolkit';

interface SplashState {
  toggled: boolean;
}

const initialState: SplashState = { toggled: true };

export const splashSlice = createSlice({
  name: 'splash',
  initialState,
  reducers: { 
    toggleSplash: (state) => {
      state.toggled = !state.toggled;
    }
  }
})

export const { toggleSplash } = splashSlice.actions;

export default splashSlice.reducer