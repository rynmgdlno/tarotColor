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

  return (
    <div className={styles.signIn}>
      <p>Hello! Sign in or create an account.</p>
      <form onSubmit={handleSubmit}>
        <Input
          className={''}
          placeholder="email"
          label="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          error={clicked && !email}
          isValid={!email}
        />
        <Input
          className={''}
          placeholder="password"
          label="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          error={clicked && !password}
          isValid={!password && password.length < 7}
        />
      </form>
      {clicked && isSubmitDisabled && (
        <p className="alert">Please fill out the form correctly.</p>
      )}
      <Button
        onClick={
          !isSubmitDisabled ? () => handleSubmit() : () => setClicked(true)
        }
        className={isSubmitDisabled ? 'disabled-button' : undefined}
      >
        Sign In
      </Button>
      <Button onClick={signInWithGoogle} className="google-button">
        Sign In with
        <GoogleIcon className="btn-icn" />
      </Button>
    </div>
  );
};
