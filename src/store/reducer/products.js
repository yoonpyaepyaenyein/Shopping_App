import {ADD_PRODUCTS, UPDATE_PRODUCTS, DELETE_PRODUCTS} from '../type';

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      let newData = action.products;

      let updateProducts;

      if (state.products.length > 0) {
        const newProduct = {
          id: state.products.length + 1,
          quantity: 1,
          name: newData.name,
          currency: newData.currency,
          price: newData.price,
          image: newData.image,
        };
        updateProducts = [...state.products, newProduct];
      } else if (newData.length > 0) {
        updateProducts = action.products;
      } else {
        updateProducts = [action.products];
      }

      return {
        ...state,
        products: updateProducts,
      };

    case UPDATE_PRODUCTS:
      let currentData = action.updateProduct;
      let prodIndex = state.products.findIndex(
        item => item.id === currentData.id,
      );

      const updateItem = [...state.products];
      updateItem[prodIndex] = currentData;

      return {
        ...state,
        products: updateItem,
      };

    case DELETE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.prodid),
      };
    default:
      return {products: state.products};
  }
};
