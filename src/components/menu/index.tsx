import React from 'react';
import { useAppDispatch, useAppSelector } from '@redux';
import { toggleSubMenus } from '@actions';
// import { toggleDarkMode } from '@actions';
import { useTheme } from '@hooks';

import { Button } from '@components';
import { HelpIcon, OpenIcon, SaveIcon, ThemeIcon, UserIcon } from '@svg';

import styles from './menu.module.scss';

export const Menu = () => {
  const dispatch = useAppDispatch();
  const [isDarkMode, toggleTheme] = useTheme();

  const fillColor = isDarkMode ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)';

  const menuToggled = useAppSelector((state) => state.ui.navigation.menuOpen);
  const activeSubMenu = useAppSelector((state) => state.ui.navigation.subMenus);
  const menuClass = menuToggled
    ? `${styles.menu} ${styles.open}`
    : `${styles.menu} ${styles.closed}`;

  const handleTheme = () => {
    toggleTheme();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, input: string) => {
    if (activeSubMenu === 'none') {
      dispatch(toggleSubMenus(input))
    } else {
      dispatch(toggleSubMenus('none'))
    }
  }

  return (
    <div className={menuClass}>
      <Button className={styles.button} onClick={e => handleClick(e, 'user')}>
        <UserIcon fillColor={fillColor} className={styles.userIcon} />
      </Button>
      <Button className={styles.button} onClick={e => handleClick(e, 'open')}>
        <OpenIcon fillColor={fillColor} className={styles.openIcon} />
      </Button>
      <Button className={styles.button} onClick={e => handleClick(e, 'save')}>
        <SaveIcon fillColor={fillColor} className={styles.saveIcon} />
      </Button>
      <Button className={styles.button} onClick={handleTheme}>
        <ThemeIcon fillColor={fillColor} className={styles.themeIcon} />
      </Button>
      <Button className={styles.button} onClick={e => handleClick(e, 'help')}>
        <HelpIcon fillColor={fillColor} className={styles.helpIcon} />
      </Button>
    </div>
  );
};
