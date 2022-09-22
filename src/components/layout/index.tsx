import React from 'react';

import { Header, Menu } from '@components';

import styles from './layout.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <Menu />
        <div className={styles.childContainer}>{children}</div>
      </div>
    </div>
  );
};

