import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/redux';
import { logout } from 'src/redux/user/actions';
import { Button } from '../Button';

import './header.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector<RootState, boolean>((state) => state.user.isAuth);

  const onLogout = () => dispatch(logout());

  return (
    <div className="header">
      <div className="header__menu">
        <div className="header__menu-links">
          <Link to="/">Home</Link>
          <Link to="/list">List</Link>
        </div>
        <div className="header__menu-account">
          {isAuth ? (
            <Button color="error" onClick={onLogout}>
              Выйти
            </Button>
          ) : (
            <Link className="btn header__menu-account-link" to="/login">
              Войти
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
