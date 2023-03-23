import React, { useCallback, useEffect, useState } from "react";

import './formBuilder.scss';

import { FormError, FormState, IFormBuilderInput, IFormBuilderProps } from "./types";
import { IUpdateStateFields } from "../Fields/types";

import Field from "../Fields/Field";

import callValidation from "./callValidation";

const FormBuilder: React.FC<IFormBuilderProps> = ({ submitForm, fields, children }): JSX.Element => {
  const [formValue, setFormValue] = useState<FormState>({});
  const [formError, setFormError] = useState<FormError>({});
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);

  useEffect(() => {
    const keys = Object.keys(formError);
    setIsDisabledButton(!keys.every((value) => formError[value].isValid));
  }, [formError]);

  useEffect(() => {
    let obj: FormError = fields.reduce<FormError>((acc, value) => {
      acc[value.name] = {
        name: value.name,
        isValid: false,
        error: '',
      };
      return acc;
    }, {});
    setFormError(obj);
  }, []);

  useEffect(() => {
    let obj: FormState = fields.reduce<FormState>((acc, value) => {
      acc[value.name] = '';
      return acc;
    }, {})
    setFormValue(obj);
  }, []);

  const updateStateFields = ({ valueInput, name }: IUpdateStateFields) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: valueInput,
    }));
  };

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
      {children}
      <button type="submit" disabled={isDisabledButton}>Submit</button>
    </form>
  )
};

export default FormBuilder;