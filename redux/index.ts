import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-duplicate-imports
import type { TypedUseSelectorHook } from 'react-redux';
import logger from 'redux-logger';

import temp from './tempSlice';
const env = process.env.ENV;

const store = configureStore({
  reducer: {
    example: temp
  },
  middleware: (getDefaultMiddleware) =>
    env !== 'dev'
      ? getDefaultMiddleware()
      : getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
