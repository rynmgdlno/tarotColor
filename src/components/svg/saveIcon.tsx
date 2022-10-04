import React from 'react';
import styles from './svg.module.scss';

export const SaveIcon = ({ fillColor, className }: Props) => {
  return (
    <svg
      className={`${styles.icon} ${className}`}
      fill={fillColor}
      width="35px"
      height="35px"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
    </svg>
  );
};
