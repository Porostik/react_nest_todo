import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { RootState } from 'src/redux';

type Props = {
  children: React.ReactNode;
  title?: string;
  isService?: boolean;
  serviceRedirectPath?: string;
  className?: string;
};

export const Page: FunctionComponent<Props> = ({
  children,
  title,
  isService,
  serviceRedirectPath,
  className,
}) => {
  const isAuth = useSelector<RootState, boolean>((state) => state.user.isAuth);

  if (isAuth && isService) {
    return <Redirect to={serviceRedirectPath} />;
  }

  return (
    <div className={classNames('page', className)}>
      <h1 className="page__title">{title}</h1>
      {children}
    </div>
  );
};
