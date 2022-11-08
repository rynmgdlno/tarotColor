import React from 'react';

import styles from './button.module.scss';

type ButtonProps = {
  children: React.ReactNode | string;
  className: string | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  children,
  className,
  onClick
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className && styles[className]} onClick={onClick}>
      {children}
    </button>
  );
};
