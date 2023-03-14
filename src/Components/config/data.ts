import { InputType } from './types';
import { FormBuilderInput } from "../Form/types";

export const fields: FormBuilderInput[] = [
  {
    label: 'First Name',
    type: InputType.Text,
    name: 'first_Name',
    isRequired: true,
  },
  {
    label: 'Last Name',
    type: InputType.Text,
    name: 'last_Name',
    isRequired: false,
  },
  {
    label: 'E-mail',
    type: InputType.Email,
    name: 'e-mail',
    isRequired: true,
  },
  {
    label: 'Password',
    type: InputType.Password,
    name: 'password',
    isRequired: true,
  },
  {
    label: 'Confirm password',
    type: InputType.Password,
    name: 'confirm_password',
    isRequired: true,
  },
  {
    label: 'Agree with rules',
    type: InputType.Checkbox,
    name: 'agree_with_rules',
    isRequired: true,
  },
];