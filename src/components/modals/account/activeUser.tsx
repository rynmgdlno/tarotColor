import React from 'react';
import { useAppSelector } from '@redux';
import { auth } from '@firebase';

import { Button } from '@components';

export const ActiveUser = () => {
  const thirdParty = 'Google';
  const userName = useAppSelector(
    (state) => state.data.user.currentUser?.displayName
  );

    const signOut = () => {
      auth.signOut();
    }

  return (
    <div>
      <p>Hello {userName}.</p>
      {thirdParty ? (
        <p>You are signed in with {thirdParty}</p>
      ) : (
        <Button className="temp" onClick={() => console.log('settings')}>
          Account Settings
        </Button>
      )}
      <Button className="temp" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
};
