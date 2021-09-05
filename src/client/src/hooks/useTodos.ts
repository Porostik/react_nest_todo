import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux';
import { fetchTodos } from 'src/redux/todo';
import { addTodo, deleteTodo } from 'src/redux/todo/actions';
import { Todo } from 'src/types/todo';

export const useTodos = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector<
    RootState,
    { list: Todo[]; loading: boolean }
  >((state) => ({
    list: state.todos.list,
    loading: state.todos.loading,
  }));

  const handleFetchTodos = () => dispatch(fetchTodos());
  const createTodo = (name: string) => dispatch(addTodo(name));
  const removeTodo = (id: number) => dispatch(deleteTodo(id));
  const id = 2;

  return { list, handleFetchTodos, loading, createTodo, removeTodo, id };
};
