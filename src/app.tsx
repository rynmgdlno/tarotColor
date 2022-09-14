import React from 'react';
import { Button } from '../src/components/button';
import { useAppDispatch, useAppSelector } from './redux';
import { toggle } from '../src/redux/UI/modals/splashSlice';
// import { decrement, increment } from './redux/tempSlice';

import styles from './app.module.scss';

export const testFunc = (a: number, b: number) => {
  return a + b;
};

function App() {
  // const val: number = useAppSelector((state) => state.example.value);
  return (
    <div className={styles.root}>
      <Splash />
    </div>
  );
}

export default App;

const Splash = () => {
  const dispatch = useAppDispatch();
  const toggled = useAppSelector(
    (state) => state.ui.modals.splashModal.toggled
  );
  const splashClass = toggled
    ? `${styles.splash} ${styles.open}`
    : `${styles.splash} ${styles.closed}`;

  return (
    <div className={splashClass}>
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
      <Button className="splashButton" onClick={() => dispatch(toggle())}>
        <h2>Click here to get started!</h2>
      </Button>
    </div>
  );
};
