import { IDataResponse } from "../../store/slice/shopping/types";

export interface IPropsCards {
  products: IDataResponse[];
  title: string;
}