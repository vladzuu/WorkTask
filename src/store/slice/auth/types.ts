export interface IInitialState {
  isErrorPassword: boolean,
  isLoading: boolean;
  isAuth: boolean;
  userData: {
    agree_with_rules: string
    confirm_password: string
    e_mail: string
    first_Name: string
    last_Name: string
    password: string
    viewProduct: boolean
  }
};
