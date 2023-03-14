import React, { useCallback, useState } from "react";

import './formBuilder.scss';

import Field from "../Fields/Field";
import { FormState, FormBuilderInput, IFormBuilder } from "./types";
import { UpdateStateFields } from "../Fields/types";

const FormBuilder: React.FC<IFormBuilder> = ({ submitForm, fields }): JSX.Element => {
  const [formValue, setFormValue] = useState<FormState>({});

  const updateStateFields = useCallback(({ valueInput, name }: UpdateStateFields) => {
    setFormValue((prev) => ({ ...prev, [name]: valueInput[name] }))
  }, []);

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(formValue);
  };

  const viewFields = fields.map((value: FormBuilderInput) => <Field
    key={value.name}
    {...value}
    updateStateFields={updateStateFields}
  />);

  return (
    <form onSubmit={onHandleSubmit}>
      {viewFields}
      <button type="submit" >Submit</button>
    </form>
  )
};

export default FormBuilder;