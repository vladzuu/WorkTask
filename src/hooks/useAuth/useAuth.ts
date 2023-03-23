import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserApi from '../../api/userApi/userApi';
import AuthApi from '../../api/authApi/authApi';

import { FormState } from '../../components/Form/types';
import { IUseAuth, IDataAuth } from './types';

const userApi = new UserApi();
const authApi = new AuthApi();

const initialDataAuth: IDataAuth = {
  isAuth: false,
  isErrorPassword: false,
  isLoading: false,
  userData: {}
};

const useAuth = (): IUseAuth => {

  const [dataAuth, setDataAuth] = useState<IDataAuth>(initialDataAuth);
  const navigate = useNavigate();

  const syncAuth = () => {
    setDataAuth({ ...dataAuth, isLoading: true });
    userApi.getUser().then(({ userData, isAuth }) => {
      setDataAuth({ ...dataAuth, isLoading: false, isAuth, userData });
    })
  };

  const logOut = () => {
    setDataAuth({ ...dataAuth, isLoading: true })
    authApi.logOut().then(() => {
      setDataAuth({ ...dataAuth, isLoading: false, isAuth: false });
    })
  };

  const logIn = (value: FormState): void => {
    authApi.login(value).then(({ isSuccess }) => {
      setDataAuth({ ...dataAuth, isErrorPassword: !isSuccess })
      if (isSuccess) {
        syncAuth();
      }
    });
  };

  const setUser = (value: FormState) => {
    setDataAuth({ ...dataAuth, isLoading: true })
    userApi.setUser(value).then(() => {
      setDataAuth({ ...dataAuth, isLoading: false })
      navigate('/')
    })
  };

  useEffect(() => {
    syncAuth();
  }, []);

  return {
    ...dataAuth,
    logOut,
    logIn,
    setUser,

  };
};

export default useAuth;
