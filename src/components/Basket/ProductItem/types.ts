export interface IProductItem {
  nameProduct: string
  count: number
  increaseProductCount: (name: string) => void
  decreaseProductCount: (name: string) => void
  deleteProductBasket: (name: string) => void
};