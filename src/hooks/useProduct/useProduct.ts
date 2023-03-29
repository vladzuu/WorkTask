import { IUseProduct } from './types';
import { useSelector } from 'react-redux';

import { getProducts } from '../../store/slice/shopping/shopping';
import { useAppDispatch, RootState } from './../../store/store';

const useProduct = (): IUseProduct => {
  const products = useSelector((state: RootState) => state.shopping.products)
  const isError = useSelector((state: RootState) => state.shopping.error);

  const dispatch = useAppDispatch()

  const getProductsI = () => {
    if (!products.length) dispatch(getProducts())
  }

  return {
    getProductsI,
    isError,
    products
  };
};

export default useProduct;
