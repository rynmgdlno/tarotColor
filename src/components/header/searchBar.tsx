import React from 'react';

import { Button } from '@components';
import { SearchIcon, Spinner } from '@svg';

import styles from './header.module.scss'

export const SearchBar = () => {

  const isLoading = false;
  const fillColor = 'rgba(0,0,0,.5)';

  const showSearch = () => {
    console.log('search toggler');
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Button className="search-button" onClick={showSearch}>
          <SearchIcon fillColor={fillColor} className={styles.searchIcon} />
        </Button>
      )}
    </>
  );
}

