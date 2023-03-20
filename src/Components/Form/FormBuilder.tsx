import React, { useCallback, useEffect, useState } from "react";

import './formBuilder.scss';

import { FormError, FormState, IFormBuilderInput, IFormBuilderProps } from "./types";
import { IUpdateStateFields } from "../Fields/types";

import Field from "../Fields/Field";

import callValidation from "./callValidation";

const FormBuilder: React.FC<IFormBuilderProps> = ({ submitForm, fields }): JSX.Element => {
  const [formValue, setFormValue] = useState<FormState>({});
  const [formError, setFormError] = useState<FormError>({});
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);

  useEffect(() => {
    const keys = Object.keys(formError)
    const arrIsValid: boolean[] = keys.map((value) => formError[value].isValid)
    console.log(formError)
    setIsDisabledButton(!arrIsValid.every((value) => value))
  }, [formError]);

  useEffect(() => {
    let obj: FormError = {}
    for (let value of fields) {
      obj[value.name] = {
        name: value.name,
        isValid: false,
        error: '',
      }
    }
    setFormError(obj)
  }, []);

  const updateStateFields = useCallback(({ valueInput, name }: IUpdateStateFields) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: valueInput,
    }));
  }, []);

  const checkFieldValid = ({ valueInput, name, validations }: IUpdateStateFields) => {
    setFormError((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        ...callValidation({
          validations,
          value: valueInput,
          state: formValue
        })
      }
    }));
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(formValue);
  };

  const viewFields = fields.map((fields: IFormBuilderInput) => <Field
    key={fields.name}
    {...fields}
    formValue={formError[fields.name]}
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