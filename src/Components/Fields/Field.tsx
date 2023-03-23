import React, { useEffect, useState } from 'react';

import { IFieldsProps, EnumTypeInput } from './types';

import './field.scss';

import Password from '../inputComponents/Password/Password';
import Checkbox from '../inputComponents/Checkbox/Checkbox';

const Field: React.FC<IFieldsProps> = ({
  label,
  type,
  name,
  isRequired,
  validations,
  formValue,
  updateStateFields,
  checkFieldValid,
}): JSX.Element => {
  const [valueInput, setValueInput] = useState<any>({ [name]: '' });
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput({ [name]: e.target.type === EnumTypeInput.Checkbox ? e.target.checked : e.target.value });
  };

  useEffect(() => {
    updateStateFields({ valueInput: valueInput[name], name, validations });
    checkFieldValid({ valueInput: valueInput[name], name, validations });
  }, [valueInput]);

  const onBlur = () => {
    setIsFocus(false);
    checkFieldValid({ valueInput: valueInput[name], name, validations });
  };

  const onFocusInput = () => {
    setIsFocus(true);
  };

  const props = {
    formValue: formValue,
    handleInput: handleInput,
    isFocus: isFocus,
    isRequired: isRequired,
    label: label,
    name: name,
    onBlur: onBlur,
    onFocusInput: onFocusInput,
    type: type,
    valueInput: valueInput,
  };

  if (type === EnumTypeInput.Password) {
    return <Password
      {...props}
    />
  };

  if (type === EnumTypeInput.Checkbox) {
    return <Checkbox
      {...props}
    />
  };

  return (
    <p className="field">
      <label className="field__label">{label}</label>
      <input
        onBlur={onBlur}
        onFocus={onFocusInput}
        type={type}
        value={type === EnumTypeInput.Text ? valueInput[name] : undefined}
        name={name}
        required={isRequired}
        onChange={handleInput}
      />
      {(!formValue?.isValid && !isFocus) && <label className="field__error">{formValue?.error}</label>}
    </p>
  );
};

export default Field;
