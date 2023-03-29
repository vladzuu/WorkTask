import axios from "axios";

export const productsApi = {
  getProducts() {
    return axios.get(`https://swapi.dev/api/starships/`)
  },
};