export interface IUseBasket {
  totalCountProducts: number;
  isOpenBasket: boolean;
  isError: boolean;
  stateBasket: {
    [name: string]: number;
  };
  getTotalCount: () => void;
  increaseProductCount: (name: string) => void;
  addProductToBasket: (name: string) => void;
  decreaseProductCount: (name: string) => void;
  handleBasket: () => void;
  deleteProductBasket: (name: string) => void;
}