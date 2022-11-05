import React from 'react';

import { Button } from '@components';
import { SearchIcon, Spinner } from '@svg';

import styles from './header.module.scss';

type SearchBarProps = {
  fillColor: string;
};

export const SearchBar = ({ fillColor }: SearchBarProps) => {
  const isLoading = false;

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
};
