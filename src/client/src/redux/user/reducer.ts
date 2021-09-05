import { createSlice } from '@reduxjs/toolkit';
import { User } from 'src/types/user';
import { logout, signIn } from './actions';

const initialUser: User = {
  username: '',
};

export const { reducer: userReducer } = createSlice({
  name: 'user',
  initialState: {
    info: initialUser,
    isAuth: true,
    isReady: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.info = payload;
        state.isAuth = true;
        state.isReady = true;
      })
      .addCase(logout, (state) => {
        state.info = initialUser;
        state.isAuth = false;
      });
  },
});
