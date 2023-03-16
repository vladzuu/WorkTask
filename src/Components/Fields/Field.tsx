import React, { useEffect, useState } from 'react';

import { IFieldsProps, EnumTypeInput } from './types';

import './field.scss';

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
  }, [valueInput]);

  const checkField = () => {
    checkFieldValid({ valueInput: valueInput[name], name, validations });
    setIsFocus(false);
  };

  const onFocusInput = () => {
    setIsFocus(true);
  };

  return (
    <p className="field">
      <label >{label}</label>
      <input
        onBlur={checkField}
        onFocus={onFocusInput}
        type={type}
        value={type === EnumTypeInput.Text ? valueInput[name] : undefined}
        checked={type === EnumTypeInput.Checkbox ? valueInput[name] : undefined}
        name={name}
        required={isRequired}
        onChange={handleInput}
      />
      {(!formValue?.isValid && !isFocus) && <label style={{ color: 'red' }} >{formValue?.error}</label>}
    </p>
  );
};

export default React.memo(Field);

