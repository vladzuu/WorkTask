import { IInputState } from "../../Form/types";

export interface IPasswordProps {
  type: string;
  label: string;
  name: string;
  isRequired: boolean;
  formValue: IInputState;
  valueInput: Record<string, string>;
  isFocus: boolean
  onBlur: () => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusInput: () => void
};