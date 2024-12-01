import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isAuthenticated: boolean;
  token: string | undefined;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: undefined,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setToken(state, action: PayloadAction<string | undefined>) {
      state.token = action.payload;
      if (action.payload) {
        AsyncStorage.setItem('token', action.payload);
      } else {
        AsyncStorage.removeItem('token');
      }
    }
  },
});

export const { setIsAuthenticated, setToken } = authSlice.actions;

export default authSlice.reducer;
