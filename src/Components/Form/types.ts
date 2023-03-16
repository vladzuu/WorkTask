export type IInputValue = string | boolean | number;

export interface IFormBuilderInput {
  type: string;
  label: string;
  name: string;
  isRequired: boolean;
  validations: ValidationsMethods[]
};

export interface ValidationsMethods {
  function: (value: IInputValue, expected?: any, state?: FormState) => { isValid: boolean, error: string };
  expected?: any
};

export interface IFormBuilderProps {
  submitForm: (value: FormState) => void;
  fields: IFormBuilderInput[];
};

export interface IInputState {
  value: IInputValue;
  name: string;
  isValid: boolean;
  error?: string;
};

export type FormState = Record<string, IInputState>;
