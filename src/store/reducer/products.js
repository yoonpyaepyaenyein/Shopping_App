import {ADD_PRODUCTS} from '../type';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {...state, products: action.products};
    default:
      return {products: state.products};
  }
};
