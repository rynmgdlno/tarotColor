import React from 'react';
// import { useAppDispatch, useAppSelector } from '@redux';


import { MenuButton } from './menuButton';
import { SearchBar } from './searchBar';

import styles from './header.module.scss';

export const Header = () => {
  // temp setup logic:
  const fillColor = 'rgba(0,0,0,.5)';

  return (
    <header className={styles.header}>
      <SearchBar />
      <h1>Tarot</h1>
      <MenuButton fillColor={fillColor} />
    </header>
  );
};
