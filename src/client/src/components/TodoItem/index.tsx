import React, { FunctionComponent } from 'react';

import { Todo } from 'src/types/todo';

import './todoItem.scss';
import DeleteIcon from './assets/delete.svg';
import { useTodos } from 'src/hooks/useTodos';

type Props = {
  item: Todo;
};

export const TodoItem: FunctionComponent<Props> = ({ item }) => {
  const { removeTodo } = useTodos();

  const handleRemove = () => removeTodo(item.id);

  return (
    <div className="todo-item">
      <div className="todo-item__inner">
        <span className="todo-item__name">{item.name}</span>
      </div>
      <button className="todo-item__delete" onClick={handleRemove}>
        <img src={DeleteIcon} alt="delete" />
      </button>
    </div>
  );
};
