import React from 'react';

import styles from './button.module.scss';

type ButtonProps = {
  children: React.ReactNode | string;
  className: string;
  disabled?: boolean;
  isEnabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  children,
  className,
  disabled,
  isEnabled = true,
  onClick
}: ButtonProps): React.ReactElement => {
  const buttonClass = isEnabled
    ? `${styles[className]}`
    : `${styles[className]} ${styles.disabled}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
