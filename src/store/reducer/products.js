import {ADD_PRODUCTS, ORDERS} from '../type';

const initialState = {
  products: [],
  orders: [],
  confirmOrder:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {...state, products: action.products};
    case ORDERS:
      return {
        ...state,
        orders: [...state.orders, action.orders],
      };
    default:
      return {products: state.products, orders: state.orders};
  }
};
