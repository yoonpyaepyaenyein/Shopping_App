import {PRODUCTS, NOPRODUCTS} from '../type';

export const addProducts = data => {
  return {
    type: PRODUCTS,
    products: data,
  };
};

export const noProducts = () => {
  return {
    type: NOPRODUCTS,
  };
};
