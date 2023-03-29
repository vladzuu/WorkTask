import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { addToBasket, decreaseProduct, deleteProduct, increaseProduct, setCountBasketProduct, setIsOpenBasket } from '../../store/slice/shopping/shopping';
import { RootState, useAppDispatch } from '../../store/store';
import { IUseBasket } from './types';


const useBasket = (): IUseBasket => {
  const stateBasket = useSelector((state: RootState) => state.shopping.basket.products);
  const shoppingState = useSelector((state: RootState) => state.shopping);

  const dispatch = useAppDispatch();

  const handleBasket = () => {
    dispatch(setIsOpenBasket());
  }

  const getTotalCount = () => {
    const totalCount = Object.entries(stateBasket).reduce((acc, [, value]) => acc + value, 0);
    dispatch(setCountBasketProduct(totalCount));
  };

  const increaseProductCount = (name: string) => {
    dispatch(increaseProduct(name));
  };

  const decreaseProductCount = (name: string) => {
    dispatch(decreaseProduct(name));
  };

  const addProductToBasket = (name: string) => {
    dispatch(addToBasket(name));
  };

  const deleteProductBasket = (name: string) => {
    dispatch(deleteProduct(name));
  };

  useEffect(() => {
    getTotalCount();
  }, [stateBasket]);

  return {
    totalCountProducts: shoppingState.basket.totalCountProduct,
    isOpenBasket: shoppingState.isOpenBasket,
    isError: shoppingState.error,
    stateBasket,
    getTotalCount,
    increaseProductCount,
    addProductToBasket,
    decreaseProductCount,
    handleBasket,
    deleteProductBasket,
  };
};

export default useBasket;
