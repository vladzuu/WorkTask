import { IInitialState } from './types';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IInitialState = {
  isErrorPassword: false,
  isLoading: false,
  isAuth: false,
  userData: {
    agree_with_rules: '',
    confirm_password: '',
    e_mail: '',
    first_Name: '',
    last_Name: '',
    password: '',
    viewProduct: true,
  }
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, { payload: { userData, isAuth } }) => {
      state.isAuth = isAuth
      state.userData = userData
      state.isLoading = false
    },
    setLogout: (state) => {
      state.isAuth = false
      state.userData = initialState.userData
      state.isLoading = false
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload
    },
    setIsErrorPassword: (state, { payload }) => {
      state.isErrorPassword = payload
    },
    setViewProduct: (state, { payload }) => {
      state.userData.viewProduct = !payload
    },
  }
})

export const { setLogin, setLogout, setIsLoading, setViewProduct, setIsErrorPassword } = auth.actions

export default auth.reducer;

