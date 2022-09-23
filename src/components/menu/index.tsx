import React from 'react';
import { useAppSelector } from '@redux';

import { Button } from '@components';
import { HelpIcon, OpenIcon, SaveIcon, ThemeIcon, UserIcon } from '@svg'

import styles from './menu.module.scss';

export const Menu = () => {
  const fillColor = 'rgba(0,0,0,.5)';
  const temp = () => {
    console.log('click');
  };
  const menuToggled = useAppSelector(state => state.ui.navigation.menuOpen);
  const menuClass = menuToggled ? `${styles.menu} ${styles.open}` : `${styles.menu} ${styles.closed}`;

  return (
    <div className={menuClass}>
      <Button className={styles.button} onClick={temp}>
        <UserIcon fillColor={fillColor} className={styles.userIcon}/>
      </Button>
      <Button className={styles.button} onClick={temp}>
        <OpenIcon fillColor={fillColor} className={styles.openIcon}/>
      </Button>
      <Button className={styles.button} onClick={temp}>
        <SaveIcon fillColor={fillColor} className={styles.saveIcon}/>
      </Button>
      <Button className={styles.button} onClick={temp}>
        <ThemeIcon fillColor={fillColor} className={styles.themeIcon}/>
      </Button>
      <Button className={styles.button} onClick={temp}>
        <HelpIcon fillColor={fillColor} className={styles.helpIcon}/>
      </Button>
    </div>
  );
};
