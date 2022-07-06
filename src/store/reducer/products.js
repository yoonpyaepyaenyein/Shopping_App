import {PRODUCTS} from '../type';

const initialState = {
  products: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS:
      return {products: action.products};
    default:
      return {products: state.products};
  }
};
