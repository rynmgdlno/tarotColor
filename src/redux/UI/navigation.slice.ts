import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
  menuOpen: boolean;
  splashToggled: boolean;
  isDarkMode: boolean;
}

const initialState: NavigationState = { 
  menuOpen: false ,
  splashToggled: true,
  isDarkMode: false,
};

export const navigationSlice = createSlice({
  name: 'splash',
  initialState,
  reducers: { 
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    toggleSplash: (state) => {
      state.splashToggled = !state.splashToggled;
    }
  }
})

export const { toggleDarkMode, toggleMenu, toggleSplash } = navigationSlice.actions;

export default navigationSlice.reducer