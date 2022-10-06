import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@redux';

import App from './app';

import 'normalize.css';
import './globals/globals.css';

const container = document.getElementById('app-root');
// todo: check if this has been fixed:
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
