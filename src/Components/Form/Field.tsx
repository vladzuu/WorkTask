import React, { Dispatch, useState } from 'react';

interface FieldsProps {
  type: string
  label: string
  name: string
  initialValue?: string | undefined
  isRequired?: boolean | undefined
  changeResult: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Field = ({ label, type, changeResult, name, isRequired, initialValue }: FieldsProps) => {
  const [value, setValue] = useState<any>(initialValue)
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'checkbox') {
      setValue(e.target.checked)
    } else {
      setValue(e.target.value)
    }
    changeResult(e)
  }

  return (
    <div className='field'>
      <label >{label}</label>
      {type === 'checkbox' ?
        <input
          type={type}
          checked={value}
          name={name}
          required={isRequired}
          onChange={(e) => handleInput(e)} />
        :
        <input
          type={type}
          value={value}
          name={name}
          required={isRequired}
          onChange={(e) => handleInput(e)} />
      }
    </div>
  );
};

export default React.memo(Field);
