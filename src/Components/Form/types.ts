export interface IFieldsProps {
  id: string
  type: string
  label: string
  name: string
  isRequired?: boolean
  initialValue?: string
}

export type FormState = Record<string, string | boolean>;