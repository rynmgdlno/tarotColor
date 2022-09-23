import React from 'react';
import { useAppDispatch, useAppSelector } from '@redux';
import { toggleMenu } from '../../redux/UI/navigation/navigationSlice';

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

  const handleMenuToggle = () => {
    dispatch(toggleMenu())
  }


  return (
    <div className={styles.menuButton}>
      <Hamburger color={fillColor} size={28} toggled={menuToggled} toggle={handleMenuToggle}/>
    </div>
  );
};
