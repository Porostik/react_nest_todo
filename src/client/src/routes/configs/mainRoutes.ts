import { Home } from 'src/pages/Home';
import { Login } from 'src/pages/Login';
import { TodoList } from 'src/pages/TodoList';
import { RouteItem } from 'src/types/routes';

export const mainRoutes: RouteItem[] = [
  {
    name: 'home',
    component: Home,
    path: '/',
    exact: true,
  },
  {
    name: 'login',
    component: Login,
    path: '/login',
  },
  {
    name: 'todoList',
    component: TodoList,
    path: '/list',
    private: true,
  },
];
