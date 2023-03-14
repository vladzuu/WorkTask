import { FormState } from './../Form/types';

export interface FieldsProps {
  type: string;
  label: string;
  name: string;
  isRequired: boolean;
  updateStateFields: ({ valueInput, name }: UpdateStateFields) => void;
};

export interface UpdateStateFields {
  valueInput: FormState
  name: string
};

export enum typeInput {
  Text = 'text',
  Checkbox = 'checkbox',
};