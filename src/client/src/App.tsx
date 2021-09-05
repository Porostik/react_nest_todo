import React from 'react';
import { Layout } from './baseComponents';
import { mainRoutes } from './routes';
import { RenderRoutes } from './routes';

import './styles/app.scss';

export const App = () => {
  return (
    <div className="app">
      <Layout>
        <RenderRoutes routes={mainRoutes} />
      </Layout>
    </div>
  );
};
