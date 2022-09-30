import React from 'react';
import { ColorValue } from '@types';
import styles from './color.module.scss';

type rgbSet = {
  r: ColorValue,
  g: ColorValue,
  b: ColorValue,
}

type ColorProps = {
  children: React.ReactNode;
  className: string | undefined;
  rgb: rgbSet
};

export const Color = ({
  children,
  className,
  rgb
}: ColorProps): React.ReactElement => {
  const { r, g, b } = rgb;
  const colorStyle = { backgroundColor: `rgb(${r}, ${g}, ${b})` }

  return (
    <div className={className && styles[className]} style={colorStyle}>
      {children}
    </div>
  );
};
