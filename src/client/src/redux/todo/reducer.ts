import { createSlice } from '@reduxjs/toolkit';
import { Todo } from 'src/types/todo';
import { addTodo, deleteTodo, fetchTodos } from './actions';

const initialState: { list: Todo[]; loading: boolean } = {
  list: [],
  loading: false,
};

export const { reducer: todosReducer } = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.list = [...state.list, payload];
      })
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.list = state.list.filter((item) => item.id !== payload);
      });
  },
});
