import { configureStore } from '@reduxjs/toolkit';

import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';

const store = configureStore({
  reducer: {
    authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type RootState = ReturnType<typeof store.getState>;
export default store;
