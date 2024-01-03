import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import Utils from 'src/utils/Utils';

export interface AuthState {
  user: null | object;
  token: null | string;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<null | object>) => {
      const stateValue = { ...state, user: action.payload };
      return stateValue;
    },
    setToken: (state, action: PayloadAction<null | string>) => {
      Utils.setLocalStorageData('@access_token', { token: action.payload });
      const stateValue = { ...state, token: action.payload };
      return stateValue;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
