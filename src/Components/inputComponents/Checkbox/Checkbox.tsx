import React, { useState } from 'react';
import { ICheckBoxProps } from './types';

import './checkbox.scss';

const Checkbox: React.FC<ICheckBoxProps> = ({
  formValue,
  isRequired,
  label,
  name,
  type,
  onBlur,
  handleInput,
  isFocus,
  valueInput,
  onFocusInput }): JSX.Element => {

  return (
    <p className="field">
      <span className='field__checkbox'>
        <input
          onBlur={onBlur}
          onFocus={onFocusInput}
          type={type}
          checked={valueInput[name]}
          name={name}
          required={isRequired}
          onChange={handleInput}
        />
        <label className="field__label">{label}</label>
      </span>
      {(!formValue?.isValid && !isFocus) && <label className="field__error checkbox">{formValue?.error}</label>}
    </p>
  );
};

export default Checkbox;
