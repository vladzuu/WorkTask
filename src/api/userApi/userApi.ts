import { IPromiseGetUser, User } from './types';
import { EnumLocalStorage } from '../localStorageTypes';

class UserApi {

  changeViewOption(email: string, viewOption: boolean): Promise<void> {
    return new Promise<void>((resolve) => {
      const usersJSON = localStorage.getItem(EnumLocalStorage.AllUsers);
      if (usersJSON) {
        const parseUsers = JSON.parse(usersJSON);
        const completeUsers = parseUsers.map((user: any) => (user.email === email) ? { user } : { ...user, viewProduct: viewOption });
        localStorage.setItem(EnumLocalStorage.AllUsers, JSON.stringify(completeUsers));
      };
      setTimeout(() => {
        resolve();
      }, 10);
    });
  };

  addNewUserToStorage(user: User) {
    const usersJSON = localStorage.getItem(EnumLocalStorage.AllUsers);
    localStorage.setItem(EnumLocalStorage.AllUsers, usersJSON
      ? JSON.stringify([...JSON.parse(usersJSON), user])
      : JSON.stringify([user])
    );
  };

  setUser(user: User): Promise<void> {
    return new Promise<void>((resolve) => {
      this.addNewUserToStorage(user);

      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  getUser(): Promise<IPromiseGetUser> {
    return new Promise<IPromiseGetUser>((resolve) => {
      const stringUserData = localStorage.getItem(EnumLocalStorage.UserData);
      const isAuth = !!localStorage.getItem(EnumLocalStorage.IsAuth);
      let userData = {};

      if (stringUserData !== null) {
        userData = JSON.parse(stringUserData);
      }

      setTimeout(() => {
        resolve({ isAuth, userData });
      }, 1000);
    });
  };
};

export default UserApi;