import { validation } from '../utills/validation/validation';

import { EnumInputType } from './types';
import { IFormBuilderInput } from "../components/Form/types";

export const fieldsRegistration: IFormBuilderInput[] = [
  {
    label: 'First Name',
    type: EnumInputType.Text,
    name: 'first_Name',
    isRequired: true,
    validations: [
      {
        function: validation.latinCharacters,
      },
      {
        function: validation.minLength,
        expected: 2
      },
      {
        function: validation.maxLength,
        expected: 15
      },
    ]
  },
  {
    label: 'Last Name',
    type: EnumInputType.Text,
    name: 'last_Name',
    isRequired: false,
    validations: [
      {
        function: validation.latinCharacters,
      },
      {
        function: validation.minLength,
        expected: 2,
      },
      {
        function: validation.maxLength,
        expected: 15,
      },
    ]
  },
  {
    label: 'E-mail',
    type: EnumInputType.Email,
    name: 'e_mail',
    isRequired: true,
    validations: [
      {
        function: validation.email,
      },
      {
        function: validation.userExistenceCheck,
      }
    ]
  },
  {
    label: 'Password',
    type: EnumInputType.Password,
    name: 'password',
    isRequired: true,
    validations: [
      {
        function: validation.password,
      },
      {
        function: validation.minLength,
        expected: 8,
      },
      {
        function: validation.maxLength,
        expected: 30,
      },
    ]
  },
  {
    label: 'Confirm password',
    type: EnumInputType.Password,
    name: 'confirm_password',
    isRequired: true,
    validations: [
      {
        function: validation.confirmPassword,
        expected: 'password',
      },

    ]
  },
  {
    label: 'Agree with rules',
    type: EnumInputType.Checkbox,
    name: 'agree_with_rules',
    isRequired: true,
    validations: [
      {
        function: validation.checkbox,
      },
    ]
  },
];

export const fieldsSignIn: IFormBuilderInput[] = [
  {
    label: 'E-mail',
    type: EnumInputType.Email,
    name: 'e_mail',
    isRequired: true,
    validations: [
      {
        function: validation.email,
      },
    ]
  },
  {
    label: 'Password',
    type: EnumInputType.Password,
    name: 'password',
    isRequired: true,
    validations: [
      {
        function: validation.notEmpty,
      },
    ]
  },

];