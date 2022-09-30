import { createSlice } from '@reduxjs/toolkit';

import { SingleColor } from '@types';

export type Palette = SingleColor[]

type APIState = {
  isLoading: boolean;
  noResults: boolean;
  query: string | null;
  queryPages: number | null;
  queryResult: Palette[] | null;
}

const initialState: APIState = {
  isLoading: false,
  noResults: false,
  query: null,
  queryPages: null,
  queryResult: null
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    toggleIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    toggleNoResults: (state) => {
      state.noResults = !state.noResults;
    }
  }
});

export const { toggleIsLoading, toggleNoResults } = apiSlice.actions;

export default apiSlice.reducer;
