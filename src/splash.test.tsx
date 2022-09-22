import React from 'react';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@utils';
import App from './app';

test('button click results in splash screen hiding', async () => {
  const user = userEvent.setup()
  const { container } = render(<App />);

  // splash screen should be visible
  const els = container.getElementsByClassName('splash')
  const splash = els[0]
  expect(splash).toBeInTheDocument();
  
  // after clicking/tapping "click here to get started" button, the splash screen is hidden
  const button = screen.getByRole('button', { name: /click here to get started!/i});
  user.click(button)
  
  await waitFor(() => {
    expect(splash.classList.contains('closed'));
  })
});
