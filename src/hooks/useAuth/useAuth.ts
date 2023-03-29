import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserApi from '../../api/userApi/userApi';
import AuthApi from '../../api/authApi/authApi';
import { useAppDispatch, RootState } from '../../store/store';

import { FormState } from '../../components/Form/types';
import { IUseAuth, IDataAuth } from './types';
import { setIsErrorPassword, setIsLoading, setLogin, setLogout } from '../../store/slice/auth/auth';

const userApi = new UserApi();
const authApi = new AuthApi();

const useAuth = (): IUseAuth => {

  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useAppDispatch()

  const syncAuth = () => {
    dispatch(setIsLoading(true))
    userApi.getUser().then(({ userData, isAuth }) => {
      console.log(userData)
      dispatch(setLogin({ userData, isAuth }))
    })
  };

  const logOut = () => {
    dispatch(setIsLoading(true))
    authApi.logOut().then(() => {
      dispatch(setLogout())
    })
  };

  const logIn = (value: FormState): void => {
    authApi.login(value).then(({ isSuccess }) => {
      dispatch(setIsErrorPassword(!isSuccess))
      if (isSuccess) {
        dispatch(setIsErrorPassword(!isSuccess))
        syncAuth();
      }
    });
  };

  const setUser = (value: FormState) => {
    dispatch(setIsLoading(true))
    const updateValue = { ...value, viewProduct: true }
    //@ts-ignore
    userApi.setUser(updateValue).then(() => {
      dispatch(setIsLoading(false))
      navigate('/')
    })
  };

  const clearError = () => {
    dispatch(setIsErrorPassword(false))
  }

  return {
    isAuth: auth.isAuth,
    isErrorPassword: auth.isErrorPassword,
    isLoading: auth.isLoading,
    userData: auth.userData,
    logOut,
    logIn,
    setUser,
    clearError,
    syncAuth,
  };
};

export default useAuth;
