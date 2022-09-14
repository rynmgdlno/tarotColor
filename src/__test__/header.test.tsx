import React from 'react';
import App from '../app';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'utils'

test('header renders correctly', () => {
  const { getByTestId } = render(<App />);
  const headerEl = getByTestId('header');

  expect(headerEl.textContent).toBe('Personal React Starter Template')
})