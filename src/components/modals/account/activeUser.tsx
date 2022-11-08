import React from 'react';

import { Button } from '@components';

export const ActiveUser = () => {
  const thirdParty = 'Google';
  const userName = 'Ryan';
  return (
    <div>
      <p>Hello {userName}, You Are Signed In.</p>
      {thirdParty ? (
        <p>You are signed in with {thirdParty}</p>
      ) : (
        <Button className="temp" onClick={() => console.log('settings')}>
          Account Settings
        </Button>
      )}
      <Button className="temp" onClick={() => console.log('settings')}>
        Sign Out
      </Button>
    </div>
  );
};
