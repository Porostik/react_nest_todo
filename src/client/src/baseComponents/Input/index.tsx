import classNames from 'classnames';
import React from 'react';

import './input.scss';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error?: string };

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className="input">
      <input
        {...props}
        className={classNames('input__control', props.className)}
        ref={ref}
      />
      {props.error && <span className="input__error">{props.error}</span>}
    </div>
  );
});
