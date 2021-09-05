import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Button } from 'src/baseComponents/Button';
import { Input } from 'src/baseComponents/Input';
import { Page } from 'src/baseComponents/Page';
import { signIn } from 'src/redux/user/actions';

import './login.scss';

export const Login: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(signIn(data));
  };

  return (
    <div className="login">
      <Page isService serviceRedirectPath="/">
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Login"
            {...register('login', { required: true })}
          />
          <Input
            placeholder="Password"
            type="password"
            {...register('password', { required: true })}
          />
          <Button className="login__form-submit" type="submit">
            Submit
          </Button>
        </form>
      </Page>
    </div>
  );
};
