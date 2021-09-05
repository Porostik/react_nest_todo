import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoApi } from 'src/modules/api';
import { Todo } from 'src/types/todo';

export const fetchTodos = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: string }
>('todos/fetch', async (_payload, thunkAPI) => {
  const { data, error } = await todoApi.getAll();

  if (!error) {
    return data;
  }

  return thunkAPI.rejectWithValue(error);
});

export const addTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
  'todos/add',
  async (payload, thunkAPI) => {
    const { data, error } = await todoApi.create(payload);

    if (!error) {
      return data;
    }

    return thunkAPI.rejectWithValue(error);
  },
);

export const deleteTodo = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>('todos/delete', async (payload, thunkAPI) => {
  const { error } = await todoApi.deleteById(payload);

  if (!error) {
    return payload;
  }

  return thunkAPI.rejectWithValue(error);
});
