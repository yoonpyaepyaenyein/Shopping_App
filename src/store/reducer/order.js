import {ADD_ORDER} from '../type';

const initialState = {
  orderItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {orderItems: action.orders};
    default:
      return {orderItems: state.orderItems};
  }
};
