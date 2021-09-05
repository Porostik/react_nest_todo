import { todosReducer } from './todo';
import { userReducer } from './user';

export const rootReducer = {
  user: userReducer,
  todos: todosReducer,
};
