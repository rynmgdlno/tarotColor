import React from 'react';
import { useAppDispatch, useAppSelector } from '@redux';
import { setActiveEditor, toggleMenu, toggleModals } from '@actions';

import Hamburger from 'hamburger-react';

import styles from './header.module.scss';

type Props = {
  fillColor: string;
};

export const MenuButton = ({ fillColor }: Props) => {
  const dispatch = useAppDispatch();
  const menuToggled = useAppSelector((state => state.ui.navigation.menuOpen))
  const activeEditor = useAppSelector((state) => state.ui.paletteEditor.activeEditor)
  const currentModal = useAppSelector((state) => state.ui.navigation.currentModal)

  const handleMenuToggle = () => {
    dispatch(toggleMenu())
    if (activeEditor !== null && [0,1,2,3,4].includes(activeEditor)) {
      dispatch(setActiveEditor(null));
    }
    if (currentModal !== 'none') {
      dispatch(toggleModals('none'));
    }
    // todo: handle sub menus
  }


  return (
    <div className={styles.menuButton}>
      <Hamburger color={fillColor} size={28} toggled={menuToggled} toggle={handleMenuToggle}/>
    </div>
  );
};
