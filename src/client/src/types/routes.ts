import React from 'react';

export type RouteItem = {
  name: string;
  path: string;
  component: React.FunctionComponent;
  exact?: boolean;
  private?: boolean;
};
