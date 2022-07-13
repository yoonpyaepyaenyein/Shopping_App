import {ADD_PRODUCTS} from '../type';

export const addProducts = data => {
  return {
    type: ADD_PRODUCTS,
    products: data,
  };
};