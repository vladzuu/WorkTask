import { IInputState, ValidationsMethods } from './../Form/types';

export interface IFieldsProps {
  type: string;
  label: string;
  name: string;
  isRequired: boolean;
  validations: ValidationsMethods[]
  formValue: IInputState
  updateStateFields: ({ valueInput, name }: IUpdateStateFields) => void;
  checkFieldValid: ({ valueInput, name }: IUpdateStateFields) => void;
};

export interface IUpdateStateFields {
  valueInput: string;
  name: string;
  validations: ValidationsMethods[];
};

export enum EnumTypeInput {
  Text = 'text',
  Checkbox = 'checkbox',
};