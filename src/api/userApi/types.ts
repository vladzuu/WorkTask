export type User = Record<string, string>;

export interface IPromiseGetUser {
  isAuth: boolean;
  userData: User;
}
