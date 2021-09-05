import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './button.scss';

type Props = {
  children: React.ReactChild;
  color?: 'primary' | 'error';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export const Button: FunctionComponent<Props> = ({
  children,
  color = 'primary',
  className,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      className={classNames('btn', className, {
        'btn--primary': color === 'primary',
        'btn--error': color === 'error',
      })}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
