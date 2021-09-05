import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux';
import { RouteItem } from 'src/types/routes';
import { PrivateRoute } from './PrivateRoute';

type Props = {
  route: RouteItem;
};

export const AuthRoute: FunctionComponent<Props> = ({ route }) => {
  const isAuth = useSelector<RootState, boolean>((state) => state.user.isAuth);
  const redirectUrl = '/login';

  return (
    <PrivateRoute
      redirectUrl={redirectUrl}
      isAuthenticated={isAuth}
      route={route}
    />
  );
};
