import React, { useState } from 'react';
// import React, { useState } from'react';
// import { auth } from '@firebase';
import { useAppSelector } from '@redux';
// import { toggleMenu, toggleModals } from '@actions';

import { AccountSettings } from './accountSettings';
import { ActiveUser } from './activeUser';
import { SignIn } from './signIn';
import { SignUp } from './signUp';

import styles from '../modals.module.scss';

export const AccountModal = () => {
  const [page] = useState('main');
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
      <div className={styles.userMenu}>
        {!currentUser && page === 'signUp' ? (
          <SignUp />
        ) : !currentUser ? (
          <div>
            <SignIn styles={styles} />
          </div>
        ) : (
          <ActiveUser />
        )}
      </div>
      {
        page === 'accountSettings' && <AccountSettings />
      }
    </div>
  );
};
