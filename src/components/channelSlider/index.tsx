import React from 'react';

import styles from './channelSlider.module.scss';

type SliderProps = {
  className: string | undefined;
};

export const ChannelSlider = ({
  className
}: SliderProps): React.ReactElement => {
  return (
    <div className={className && styles[className]}>
      slider
    </div>
  );
};
