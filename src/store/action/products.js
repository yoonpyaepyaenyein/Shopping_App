import {ADD_PRODUCTS, ORDERS} from '../type';

export const addProducts = data => {
  return {
    type: ADD_PRODUCTS,
    products: data,
  };
};

export const orderProducts = data => {
  return {
    type: ORDERS,
    orders: data,
  };
};