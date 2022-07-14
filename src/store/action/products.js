import {ADD_PRODUCTS, UPDATE_PRODUCTS, DELETE_PRODUCTS} from '../type';

export const addProducts = data => {
  return {
    type: ADD_PRODUCTS,
    products: data,
  };
};

export const updateProducts = data => {
  return {
    type: UPDATE_PRODUCTS,
    updateProduct: data,
  };
};

export const deleteProduct = id => {
  return {
    type: DELETE_PRODUCTS,
    prodid: id,
  };
};
