import React, { FunctionComponent } from 'react';
import { useEffectOnce } from 'react-use';

import { Page } from 'src/baseComponents/Page';
import { AddTodo } from 'src/components/AddTodo';
import { TodoItem } from 'src/components/TodoItem';
import { useTodos } from 'src/hooks/useTodos';

import './todoList.scss';

export const TodoList: FunctionComponent = () => {
  const { list, handleFetchTodos } = useTodos();

  useEffectOnce(() => {
    handleFetchTodos();
  });

  return (
    <Page className="todos">
      <AddTodo />
      <div className="todos__list">
        {list.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))}
      </div>
    </Page>
  );
};
