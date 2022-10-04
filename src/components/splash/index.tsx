import React from 'react';
import { Button } from '@components';
import { useAppDispatch, useAppSelector } from '@redux';
import { toggleSplash } from '@actions';

import styles from './splash.module.scss'

export const Splash = () => {
  const dispatch = useAppDispatch();
  const toggled = useAppSelector(
    (state) => state.ui.navigation.splashToggled
  );
  const splashClass = toggled
    ? `${styles.splash} ${styles.open}`
    : `${styles.splash} ${styles.closed}`;

  return (
    <div className={splashClass}>
      <div className={styles.content}>
        <h1>
          Welcome to <span>Tarot</span>
        </h1>
        <h4>The Keyword Based Color Palette Generator</h4>
        <p>
          Enter a search word or short phrase and hit enter to generate an
          infinite number of palettes.
        </p>
        <p>
          Swipe left to right or use the arrow keys to browse through the results.
        </p>
        <p>Tap or click an individual color to adjust its RGB values.</p>
        <p>Create an account to save palettes and access them later.</p>
        <Button className="splashButton" onClick={() => dispatch(toggleSplash())}>
          <h2>Click here to get started!</h2>
        </Button>
      </div>
    </div>
  );
};