import { EnumLocalStorage } from '../localStorageTypes';
import { User, IPromiseCheckPass } from './types';

class AuthApi {

  saveUserToStorage(user: User) {
    localStorage.setItem(EnumLocalStorage.IsAuth, '1');
    localStorage.setItem(EnumLocalStorage.UserData, JSON.stringify(user));
  };

  login(user: User): Promise<IPromiseCheckPass> {
    return new Promise<IPromiseCheckPass>((resolve) => {

      const check: () => boolean = () => {
        const allUsers = localStorage.getItem(EnumLocalStorage.AllUsers);
        if (allUsers !== null) {
          const usersArray = JSON.parse(allUsers);
          const userData = usersArray.find((userElement: User) => user.e_mail === userElement.e_mail);
          if (userData && userData.password === user.password) {
            this.saveUserToStorage(userData);
            return true;
          };
        };
        return false;
      };
      const isSuccess = check();
      setTimeout(() => {
        resolve({ isSuccess });
      }, 1000);
    });
  };

  logOut(): Promise<void> {
    return new Promise<void>((resolve) => {
      localStorage.removeItem(EnumLocalStorage.IsAuth);
      localStorage.removeItem(EnumLocalStorage.UserData);
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
}


export default AuthApi;