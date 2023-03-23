import { FormState } from "../../components/Form/types";

export interface IUseAuth {
  isAuth: boolean;
  isErrorPassword: boolean;
  isLoading: boolean;
  logOut: () => void;
  logIn: (value: FormState) => void;
  setUser: (value: FormState) => void;
  userData: any;
};

export interface IDataAuth {
  isErrorPassword: boolean;
  isLoading: boolean;
  isAuth: boolean;
  userData: {};
};