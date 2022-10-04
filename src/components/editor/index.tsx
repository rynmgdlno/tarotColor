import React from 'react';
import { useAppSelector } from '@redux';

import { ChannelSlider } from '@components';
import { getContrastingColor } from '@utils';

import styles from './editor.module.scss';

type EditorProps = {
  className: string | undefined;
};

export const Editor = ({ className }: EditorProps): React.ReactElement => {
  const { activeEditor, paletteData } = useAppSelector(
    (state) => state.ui.paletteEditor
  );
  const currentColor = paletteData.filter(
    (color) => color.id === activeEditor
  )[0];

  const rgb = currentColor
    ? Object.entries(currentColor).slice(1)
    : Object.entries(paletteData[0]).slice(1);

  const colorStyle = {
    backgroundColor: `rgb(${rgb[0][1]}, ${rgb[1][1]}, ${rgb[2][1]})`
  };

  const foreColor = getContrastingColor({
    r: rgb[0][1],
    g: rgb[1][1],
    b: rgb[2][1]
  });

  return (
    <div className={className && styles[className]} style={colorStyle}>
      {rgb.map((channel) => (
        <ChannelSlider
          key={channel[0]}
          channelName={channel[0]}
          className="sliderContainer"
          foreColor={foreColor}
          value={channel[1]}
        />
      ))}
    </div>
  );
};
