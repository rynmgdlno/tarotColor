import React, { ChangeEvent, useEffect, useState } from 'react';

import { validateEmail } from '@utils';
import {
  signInWithEmail,
  signInWithGoogle
  // sendPasswordResetEmail
} from '@firebase';

import { Button, Input } from '@components';
import { GoogleIcon } from '@svg';

type Props = {
  styles: Record<string, string | undefined>;
};

export const SignIn = ({ styles }: Props) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;
  const [clicked, setClicked] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  // const [errorMessage, setErrorMessage] = useState(false);
  // const [reset, setReset] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    signInWithEmail(email, password);
    setFormData({
      email: '',
      password: ''
    });
  };

  useEffect(() => {
    if (password.length > 7 && validateEmail(email)) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [email, password]);

  // ! delete
  const showSearch = () => {
    console.log('search toggler');
  };

  const fillColor = 'transparent';
  const errorFields = 'none'

  return (
    <div className={styles.subModal}>
      <p>
        Hello! If you would like to save palettes please sign in or create an
        account.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          autocomplete="email"
          className={''}
          placeholder="email"
          label="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          error={clicked && !email}
          fillColor={fillColor}
          isValid={!!email && validateEmail(email)}
        />
        <Input
          autocomplete="password"
          className={''}
          placeholder="password"
          label="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          error={clicked && !password}
          fillColor={'var(--bg-color-main'}
          isValid={!!password && password.length > 7}
        />
      </form>
      <Button
        onClick={
          !isSubmitDisabled ? () => handleSubmit() : () => setClicked(true)
        }
        className={'accountButton'}
        isEnabled={!isSubmitDisabled}
      >
        <p>Sign In</p>
      </Button>
      <Button onClick={signInWithGoogle} className="accountButton">
        <p>Sign In with</p>
        <GoogleIcon />
      </Button>
      <Button onClick={showSearch} className="accountButton">
        <p>Create New Account</p>
      </Button>
      {clicked && isSubmitDisabled && (
        <p className="alert">
          There is an error in the form. Please check the {errorFields} field(s)
          and try again.
        </p>
      )}
    </div>
  );
};
