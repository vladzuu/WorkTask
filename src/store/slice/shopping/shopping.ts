import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { productsApi } from '../../../api/productsApi/productsApi';

import { IDataResponse, IInitialStateShopping } from './types';

const initialState: IInitialStateShopping = {
  products: [],
  basket: { products: {}, totalCountProduct: 0 },
  error: false,
  isLoading: false,
  isOpenBasket: false,
}

const shopping = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    setError: (state) => {
      state.error = true;
    },
    setProducts: (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
      state.error = false
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    addToBasket: (state, { payload }) => {
      state.basket.products[payload] = 1;
    },
    increaseProduct: (state, { payload }) => {
      state.basket.products[payload] += 1;
    },
    decreaseProduct: (state, { payload }) => {
      (state.basket.products[payload] === 1)
        ? delete state.basket.products[payload]
        : state.basket.products[payload] -= 1;
    },
    setCountBasketProduct: (state, { payload }) => {
      state.basket.totalCountProduct = payload
    },
    setIsOpenBasket: (state) => {
      state.isOpenBasket = !state.isOpenBasket
    },
    deleteProduct: (state, { payload }) => {
      delete state.basket.products[payload]
    },
  }
})

export const { setProducts,
  setLoading,
  addToBasket,
  increaseProduct,
  decreaseProduct,
  setCountBasketProduct,
  deleteProduct,
  setIsOpenBasket,
  setError
} = shopping.actions

export const getProducts = createAsyncThunk(
  'shopping/getProducts',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await productsApi.getProducts();
      const arrItems: IDataResponse[] = response.data.results;
      dispatch(setProducts(arrItems));
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError());
      dispatch(setLoading(false))
    }
  }
)

export default shopping.reducer;


