import React, { useEffect, useState } from 'react';
import { FormState, IInputValue } from '../Form/types';

import './field.scss';

import { FieldsProps, typeInput } from './types';

const Field: React.FC<FieldsProps> = ({ label, type, name, isRequired, updateStateFields }): JSX.Element => {
  const [valueInput, setValueInput] = useState<any>({ [name]: '' });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput({ [name]: e.target.type === typeInput.Checkbox ? e.target.checked : e.target.value })
  };

  useEffect(() => {
    updateStateFields({ valueInput, name });
  }, [valueInput]);

  return (
    <p className="field">
      <label >{label}</label>
      <input
        type={type}
        value={type === typeInput.Text ? valueInput[name] : undefined}
        checked={type === typeInput.Checkbox ? valueInput[name] : undefined}
        name={name}
        required={isRequired}
        onChange={handleInput}
      />
    </p>
  );
};

export default React.memo(Field);
