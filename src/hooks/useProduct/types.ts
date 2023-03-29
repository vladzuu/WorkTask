import { IDataResponse } from "../../store/slice/shopping/types";

export interface IUseProduct {
  getProductsI: () => void;
  isError: boolean;
  products: IDataResponse[];
}