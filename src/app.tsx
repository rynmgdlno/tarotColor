import React from 'react';
// import { Splash } from '@components'
import { Tarot } from '@views';
import { auth, useFirebaseAuth } from '@firebase';

import styles from './app.module.scss';

import 'normalize.css';
import './globals/globals.css';

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function App() {
  useFirebaseAuth(auth);
  return (
    <div className={styles.root}>
      {/* <Splash /> */}
      <Tarot />
    </div>
  );
}

export default App;
