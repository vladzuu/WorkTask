import React, { useCallback, useEffect, useState } from "react";

import './formBuilder.scss';

import { FormState, IFormBuilderInput, IFormBuilderProps } from "./types";
import { IUpdateStateFields } from "../Fields/types";

import Field from "../Fields/Field";

import callValidation from "./callValidation";

const FormBuilder: React.FC<IFormBuilderProps> = ({ submitForm, fields }): JSX.Element => {
  const [formValue, setFormValue] = useState<FormState>({});
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);

  useEffect(() => {
    const arrIsValid: boolean[] = []

    for (let key in formValue) {
      arrIsValid.push(formValue[key].isValid)
    }
    setIsDisabledButton(!arrIsValid.every((value) => value))
  }, [formValue]);

  useEffect(() => {
    let obj: FormState = {}
    for (let value of fields) {
      obj[value.name] = {
        value: '',
        name: value.name,
        isValid: false,
        error: '',
      }
    }
    setFormValue(obj)
  }, []);

  const updateStateFields = useCallback(({ valueInput, name, validations }: IUpdateStateFields) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: valueInput,
      }
    }));
  }, []);

  const checkFieldValid = useCallback(({ valueInput, name, validations }: IUpdateStateFields) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        ...callValidation({
          validations,
          value: valueInput,
          state: prev
        })
      }
    }));
  }, []);

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(formValue);
  };

  const viewFields = fields.map((fields: IFormBuilderInput) => <Field
    key={fields.name}
    {...fields}
    formValue={formValue[fields.name]}
    updateStateFields={updateStateFields}
    checkFieldValid={checkFieldValid}
  />);

  return (
    <form noValidate onSubmit={onHandleSubmit}>
      {viewFields}
      <button type="submit" disabled={isDisabledButton}>Submit</button>
    </form>
  )
};

export default FormBuilder;