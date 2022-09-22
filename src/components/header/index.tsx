import React from 'react';
// import { useAppDispatch, useAppSelector } from '@redux';

import { Button } from '@components';
import { Spinner } from '@svg';

import styles from './header.module.scss';

export const Header = () => {
  // temp setup logic:
  const isLoading = false;

  const showSearch = () => {
    console.log('search toggler');
  };

  return (
    <header className={styles.header}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Button className="search-button" onClick={showSearch}>
          Search
        </Button>
      )}
    </header>
  );
};
