import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'src/baseComponents/Button';
import { Input } from 'src/baseComponents/Input';
import { useTodos } from 'src/hooks/useTodos';

import './addTodo.scss';

export const AddTodo = () => {
  const { createTodo } = useTodos();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => createTodo(data.name);

  return (
    <form className="add-todo" onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="add-todo__input"
        placeholder="name"
        {...register('name')}
      />
      <Button className="add-todo__submit" type="submit">
        Add
      </Button>
    </form>
  );
};
