import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
  menuOpen: boolean;
  splashToggled: boolean;
  isDarkMode: boolean;
  subMenus: string;
}

const initialState: NavigationState = { 
  menuOpen: false,
  splashToggled: true,
  isDarkMode: false,
  subMenus: 'none'
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
    },
    toggleSubMenus: (state, action) => {
      state.subMenus = action.payload;
    }
  }
})

export const { toggleDarkMode, toggleMenu, toggleSplash, toggleSubMenus } = navigationSlice.actions;

export default navigationSlice.reducer