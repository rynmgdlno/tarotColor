import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-duplicate-imports
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from './index';

interface SplashState {
  toggled: boolean;
}

const initialState: SplashState = { toggled: true };

export const tempSlice = createSlice({
  name: 'temp',
  initialState,
  reducers: { 
    toggle: (state) => {
      state.toggled = !state.toggled;
    }
  }
})

export const { toggle } = tempSlice.actions;

export default tempSlice.reducer