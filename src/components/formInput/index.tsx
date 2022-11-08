import React, { ChangeEventHandler } from 'react';

import { CheckIcon } from '@svg';

import styles from './formInput.module.scss';

type InputProps = {
  autocomplete: string;
  className: string;
  error: boolean;
  fillColor: string;
  isValid: boolean;
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type: string;
  value: string;
};

type SelectProps = { className: string };

type TextAreaProps = {
  className: string;
  error: string;
  fillColor: string;
  isValid: boolean;
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
  value: string;
};

export const Input = ({
  autocomplete,
  className,
  // error,
  fillColor,
  isValid,
  label,
  name,
  onChange,
  placeholder,
  type,
  value,
  ...props
}: InputProps) => {
  const checkClass = isValid
    ? `${styles.check} ${styles.valid}`
    : `${styles.check}`;
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        autoComplete={autocomplete}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={onChange}
        // style={
        //   error
        //     ? { border: 'solid 1px var(--error)' }
        //     : { border: 'solid 1px var(--form-border-color' }
        // }
        {...props}
      />
      <CheckIcon fillColor={fillColor} className={checkClass} />
    </div>
  );
};

export const Select = ({ className }: SelectProps) => {
  return <select className={className}>props.children</select>;
};

export const TextArea = ({
  className,
  isValid,
  error,
  label,
  name,
  onChange,
  placeholder,
  value,
  ...props
}: TextAreaProps) => {
  const checkClass = isValid ? 'check' : 'checkValidated';
  return (
    <div className={styles.textAreaContainer}>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        className={className}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        style={
          error
            ? { border: 'solid 1px var(--error)' }
            : { border: 'solid 1px rgb(11, 21, 26)' }
        }
        {...props}
      />
      <CheckIcon fillColor="rgb(183, 204, 220)" className={checkClass} />
    </div>
  );
};
