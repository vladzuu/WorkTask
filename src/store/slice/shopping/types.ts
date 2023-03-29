export interface IDataResponse {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string;
  starship_class: string;
  url: string;
};

export interface IBasket {
  products: {
    [name: string]: number;
  };
  totalCountProduct: number;
};

export interface IInitialStateShopping {
  products: IDataResponse[];
  basket: IBasket;
  error: boolean;
  isLoading: boolean;
  isOpenBasket: boolean;
};
