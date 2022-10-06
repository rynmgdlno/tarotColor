import React from 'react';
// import { Splash } from '@components'
import { Tarot } from '@views';

// import { useTheme } from '@hooks';

import styles from './app.module.scss';

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function App() {
  // useTheme();
  return (
    <div className={styles.root}>
      {/* <Splash /> */}
      <Tarot />
    </div>
  );
}

export default App;
