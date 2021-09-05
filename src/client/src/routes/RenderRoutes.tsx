import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import { RouteItem } from 'src/types/routes';
import { AuthRoute } from './PrivateRoute';

type Props = {
  routes: RouteItem[];
};

export const RenderRoutes: FunctionComponent<Props> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((item, idx) => {
        return item.private ? (
          <AuthRoute route={item} key={idx} />
        ) : (
          <Route
            exact={item.exact}
            path={item.path}
            component={item.component as any}
            key={idx}
          />
        );
      })}
    </Switch>
  );
};
