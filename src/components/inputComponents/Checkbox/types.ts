import { IInputState } from "../../Form/types";

export interface ICheckBoxProps {
  type: string;
  label: string;
  name: string;
  isRequired: boolean;
  formValue: IInputState;
  valueInput: Record<string, boolean>;
  isFocus: boolean
  onBlur: () => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusInput: () => void
};