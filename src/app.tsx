import React from 'react';
// import { decrement, increment } from './redux/tempSlice';
import { Splash } from '@components'
import { Tarot } from '@views';

import styles from './app.module.scss';

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function App() {
  console.log(window.innerHeight * .01)
  return (
    <div className={styles.root}>
      <Splash />
      <Tarot />
    </div>
  );
}

export default App;
