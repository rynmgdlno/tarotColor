import React from 'react';
// import React, { useState } from'react';
// import { auth } from '@firebase';
import { useAppSelector } from '@redux';
// import { toggleMenu, toggleModals } from '@actions';

// import { Button } from '@components';
import { SignIn } from './signIn';
import { ActiveUser } from './activeUser';

import styles from '../modals.module.scss';

export const AccountModal = () => {
  const currentUser = useAppSelector((state) => state.data.user.currentUser);
  const currentModal = useAppSelector(
    (state) => state.ui.navigation.currentModal
  );

  const modalClass =
    currentModal === 'account'
      ? `${styles.modal} ${styles.open}`
      : `${styles.modal}`;

  return (
    <div className={modalClass}>
      {currentUser ? <ActiveUser /> : <SignIn styles={styles} />}
    </div>
  );
};
