import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
  menuOpen: boolean;
  splashToggled: boolean;
}

const initialState: NavigationState = { 
  menuOpen: false ,
  splashToggled: true
};

export const navigationSlice = createSlice({
  name: 'splash',
  initialState,
  reducers: { 
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    toggleSplash: (state) => {
      state.splashToggled = !state.splashToggled;
    }
  }
})

export const { toggleMenu, toggleSplash } = navigationSlice.actions;

export default navigationSlice.reducer