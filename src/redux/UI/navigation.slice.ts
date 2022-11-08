import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
  menuOpen: boolean;
  splashToggled: boolean;
  isDarkMode: boolean;
  currentModal: string | null;
}

const initialState: NavigationState = {
  menuOpen: false,
  splashToggled: true,
  isDarkMode: false,
  currentModal: 'none'
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
    toggleModals: (state, action) => {
      state.currentModal = action.payload;
    }
  }
});

export const { toggleDarkMode, toggleMenu, toggleSplash, toggleModals } =
  navigationSlice.actions;

export default navigationSlice.reducer;
