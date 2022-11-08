import React from 'react';
import { useAppDispatch, useAppSelector } from '@redux';
import { setActiveEditor, toggleMenu, toggleModals } from '@actions';
import { getContrastingColor, getHex } from '@utils';

import { RGBSet } from '@types';

import styles from './color.module.scss';

type ColorProps = {
  id: number;
  rgb: RGBSet;
};

export const Color = ({ id, rgb }: ColorProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const currentEditor = useAppSelector(
    (state) => state.ui.paletteEditor.activeEditor
  );
  const modalIsOpen =
    useAppSelector((state) => state.ui.navigation.currentModal) !== 'none';
  const menuIsOpen = useAppSelector((state) => state.ui.navigation.menuOpen);
  const { r, g, b } = rgb;
  const colorStyle = { backgroundColor: `rgb(${r}, ${g}, ${b})` };
  const hex = getHex({ r, g, b });
  const foreColor = getContrastingColor({ r, g, b });

  const toggleEditor = (id: number): void => {
    dispatch(setActiveEditor(currentEditor === id ? null : id));
    if (menuIsOpen) dispatch(toggleMenu());
    if (modalIsOpen) dispatch(toggleModals('none'));
    // todo: hide search field
  };

  const colorClass =
    currentEditor === id
      ? `${styles.color} ${styles.editorOpen} ${styles.selected}`
      : currentEditor !== null
      ? `${styles.color} ${styles.editorOpen}`
      : `${styles.color}`;

  return (
    <div
      className={colorClass}
      style={colorStyle}
      onClick={() => toggleEditor(id)}
    >
      {currentEditor === id && (
        <div className={styles.activeColor}>
          <span className={styles.hex} style={{ color: foreColor }}>
            {hex}
          </span>
          <div
            className={styles.indicator}
            style={{ backgroundColor: foreColor }}
          />
        </div>
      )}
    </div>
  );
};
