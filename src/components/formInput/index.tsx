import React, { ChangeEventHandler } from 'react';

import {CheckIcon} from '@svg';

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  className: string;
  value: string;
  isValid: boolean;
  error: boolean;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

type SelectProps = { className: string }

type TextAreaProps = { 
  className: string;
  isValid: boolean;
  error: string;
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
  value: string;
}

export const Input = ({
  name,
  type,
  placeholder,
  className,
  value,
  isValid,
  error,
  label,
  onChange,
  ...props
}: InputProps) => {
  const checkClass = isValid ? 'check' : 'checkValidated';
  return (
    <div className="inputContainer">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={onChange}
        style={
          error
            ? { border: 'solid 1px var(--error)' }
            : { border: 'solid 1px rgb(11, 21, 26)' }
        }
        {...props}
      />
      <CheckIcon fillColor="rgb(183, 0, 0)" className={checkClass} />
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
    <div className='inputContainer'>
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
