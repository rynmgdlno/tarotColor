import React from 'react';
import { useAppSelector } from '@redux';

import { Color, Editor, Layout } from '@components';

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
            key={color.id}
            id={color.id}
            rgb={{ r: color.r, g: color.g, b: color.b }}
          />
        ))}
        <Editor className="editor" />
      </div>
    </Layout>
  );
};
