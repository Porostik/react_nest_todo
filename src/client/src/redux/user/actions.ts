import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../modules/api';
import { SignIn, User } from '../../types/user';

export const signIn = createAsyncThunk<User, SignIn, { rejectValue: string }>(
  'user/login',
  async (payload, thunkAPI) => {
    const { login, password } = payload;

    const { data, error } = await userApi.signIn({ login, password });

    if (!error) {
      return data;
    }

    return thunkAPI.rejectWithValue(error);
  },
);

export const logout = createAction('user/logout');
