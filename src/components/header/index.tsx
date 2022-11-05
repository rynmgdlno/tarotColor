import React from 'react';
// import { useAppDispatch, useAppSelector } from '@redux';
import { useTheme } from '@hooks';

import { MenuButton } from './menuButton';
import { SearchBar } from './searchBar';

import styles from './header.module.scss';

export const Header = () => {
  // temp setup logic:
  const [isDarkMode] = useTheme();

  const fillColor = isDarkMode ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)';

  return (
    <header className={styles.header}>
      <SearchBar fillColor={fillColor}/>
      <h1>Tarot</h1>
      <MenuButton fillColor={fillColor} />
    </header>
  );
};
