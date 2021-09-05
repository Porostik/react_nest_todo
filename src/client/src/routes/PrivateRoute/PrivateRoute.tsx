import React, { FunctionComponent } from 'react';
import { Redirect, Route } from 'react-router';
import { RouteItem } from 'src/types/routes';

type Props = {
  route: RouteItem;
  redirectUrl: string;
  isAuthenticated: boolean;
};

export const PrivateRoute: FunctionComponent<Props> = ({
  route,
  redirectUrl,
  isAuthenticated,
}) => {
  const Component = route.component;

  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={() => {
        return !isAuthenticated ? <Redirect to={redirectUrl} /> : <Component />;
      }}
    />
  );
};
