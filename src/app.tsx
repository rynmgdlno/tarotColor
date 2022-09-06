import React from 'react';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.hello}>
        <h3>Personal React Starter Template</h3>
        <h4>Configured With:</h4>
        <ul>
          <li>React 18</li>
          <li>Redux Toolkit</li>
          <li>TypeScript</li>
          <li>ESLint & Prettier</li>
          <li>Jest for Unit and Integration Tests</li>
          <li>Cypress for E2E Tests</li>
          <li>SASS</li>
          <li>Minimal Custom WebPack Config</li>
        </ul>
        <hr />
        <h4>Cypress:</h4>
        <p>
          Cypress needs to be initialized with <code>yarn cypress</code>
        </p>
        <p>
          For further Cypress configuration{' '}
          <a href="https://learntdd.in/react/">see here</a>
        </p>
        <hr />
        <h4>Jest:</h4>
        <p>
          To run tests: <code>yarn test</code>
        </p>
        <p>
          For further Jest configuration{' '}
          <a href="https://blog.logrocket.com/testing-typescript-apps-using-jest/">
            see here
          </a>
        </p>
        <h4>Redux Toolkit:</h4>
        <p>
          Initial store is setup in <code>/redux/index.ts</code> with an example
          slice file <code>tempSlice.ts</code>
        </p>
        <p>
          For Redux Toolkit & TypeScript info{' '}
          <a href="https://redux-toolkit.js.org/usage/usage-with-typescript">
            see here
          </a>
        </p>
        <hr />
        <h4>Config:</h4>
        <p>
          Settings for WebPack, ESLint, and Prettier live in{' '}
          <code>webpack.config.js</code>, <code>.eslintrc.js</code>, and{' '}
          <code>.prettierrc</code>, respectively.
        </p>
      </div>
    </div>
  );
}

export default App;
