import React from 'react';
import { useAppDispatch, useAppSelector } from '@redux';
import { setPaletteData } from '@actions';

// import { ChannelValue, ColorObj } from '@types';

import styles from './channelSlider.module.scss';

type SliderProps = {
  channelName: string;
  className: string | undefined;
  foreColor: string;
  value: number;
};

export const ChannelSlider = ({
  channelName,
  className,
  foreColor,
  value
}: SliderProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { activeEditor, paletteData } = useAppSelector(
    (state) => state.ui.paletteEditor
  );

  const newPaletteData = JSON.parse(JSON.stringify(paletteData));

  const onSlider = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const id = activeEditor || 0;
    newPaletteData[id][channelName] = parseInt(e.target.value);
    dispatch(setPaletteData(newPaletteData));
  };

  return (
    <div className={className && styles[className]}>
      <p style={{ color: foreColor }}>{`${channelName}: ${value}`}</p>
      <input
        className={styles.slider}
        type="range"
        min="0"
        max="255"
        name={channelName}
        value={value}
        onChange={onSlider}
      />
    </div>
  );
};
