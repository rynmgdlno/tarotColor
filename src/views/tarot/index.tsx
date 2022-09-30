import React from 'react';
import { useAppSelector } from '@redux';

import { ChannelSlider, Color, Editor, Layout } from '@components';

import styles from './tarot.module.scss';

export const Tarot = () => {
  // const dispatch = useAppDispatch();
  const paletteData = useAppSelector(
    (state) => state.ui.paletteEditor.paletteData
  );

  return (
    <Layout>
      <div className={styles.tarot}>
        {paletteData.map((color) => (
          <Color
            className="color"
            key={color.id}
            rgb={{ r: color.red, g: color.green, b: color.blue }}
          >
            <Editor className="editor" key={color.id} id={color.id}>
              <ChannelSlider className="channelSlider" />
            </Editor>
          </Color>
        ))}
      </div>
    </Layout>
  );
};
