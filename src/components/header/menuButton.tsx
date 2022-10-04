import React from 'react';
import { useAppDispatch, useAppSelector } from '@redux';
import { setActiveEditor, toggleMenu } from '@actions';

import Hamburger from 'hamburger-react';

// import { Button } from '@components';
// import { Search, Spinner } from '@svg';

import styles from './header.module.scss';

type Props = {
  fillColor: string;
};

export const MenuButton = ({ fillColor }: Props) => {
  const dispatch = useAppDispatch();
  const menuToggled = useAppSelector((state => state.ui.navigation.menuOpen))
  const activeEditor = useAppSelector((state) => state.ui.paletteEditor.activeEditor)

  const handleMenuToggle = () => {
    dispatch(toggleMenu())
    if (activeEditor !== null && [0,1,2,3,4].includes(activeEditor)) {
      dispatch(setActiveEditor(null))
    }
    // todo: handle user modal
    // todo: handle palettes modal
    // todo: handle save modal
  }


  return (
    <div className={styles.menuButton}>
      <Hamburger color={fillColor} size={28} toggled={menuToggled} toggle={handleMenuToggle}/>
    </div>
  );
};
