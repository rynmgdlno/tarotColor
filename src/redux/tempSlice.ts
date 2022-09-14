import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-duplicate-imports
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from './index';

interface InitState {
  value: number;
}

const initialState: InitState = { value: 0 };

export const tempSlice = createSlice({
  name: 'temp',
  initialState,
  reducers: { 
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

export const { increment, decrement, setCount } = tempSlice.actions;

export default tempSlice.reducer