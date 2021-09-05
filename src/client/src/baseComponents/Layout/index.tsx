import React from 'react';
import { Header } from '../Header';

import './layout.scss';

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__body">{children}</div>
    </div>
  );
};
