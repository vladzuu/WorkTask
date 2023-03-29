import { useSelector } from "react-redux";

import UserApi from "../../api/userApi/userApi";

import { setViewProduct } from "../../store/slice/auth/auth";
import { RootState, useAppDispatch } from "../../store/store";

import { EnumLocalStorage } from "../../api/localStorageTypes";

const userApi = new UserApi();

const useUserSetting = () => {
  const userData = useSelector((state: RootState) => state.auth.userData);
  const dispatch = useAppDispatch();

  const setViewVariant = (viewOption: boolean) => {
    dispatch(setViewProduct(viewOption));
    userApi.changeViewOption(userData.e_mail, !viewOption);
    localStorage.setItem(EnumLocalStorage.UserData, JSON.stringify({ ...userData, viewProduct: !viewOption }));
  }

  return {
    setViewVariant,
    viewVariant: userData.viewProduct
  };
};

export default useUserSetting;
