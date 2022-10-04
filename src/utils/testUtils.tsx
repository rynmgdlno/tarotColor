/*
* Custom render wrapper to provide Redux Provider to tests
*/

import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../redux';

type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };