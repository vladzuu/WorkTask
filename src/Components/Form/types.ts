export interface FormBuilderInput {
  type: string
  label: string
  name: string
  isRequired: boolean
};

export interface IFormBuilder {
  submitForm: (value: FormState) => void
  fields: FormBuilderInput[]
};

export type IInputValue = string | boolean;
export type FormState = Record<string, IInputValue>;
