import React, { useState } from 'react';
import { IPasswordProps } from './types';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import './password.scss';

const Password: React.FC<IPasswordProps> = ({
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

  const [visiblePass, setVisiblePass] = useState<string>(type)

  return (
    <p className="field">
      <label className="field__label">{label}</label>
      <span style={{ display: "flex" }}>
        <input
          style={{ flexGrow: 1 }}
          onBlur={onBlur}
          onFocus={onFocusInput}
          type={visiblePass}
          value={valueInput[name]}
          name={name}
          required={isRequired}
          onChange={handleInput}
        />
        {(visiblePass === 'password') ?
          <AiOutlineEyeInvisible className='logo-svg' onClick={(e) => setVisiblePass('text')} />
          :
          <AiOutlineEye className='logo-svg' onClick={(e) => setVisiblePass('password')} />}
      </span>
      <label className="field__error">{!formValue?.isValid && !isFocus && formValue?.error}</label>
    </p>
  );
};

export default Password;
