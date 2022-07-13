import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

import ProductReducer from './reducer/products';
import CartReducer from './reducer/cart';
import OrderReducer from './reducer/order';

const rootReducer = combineReducers({
  productsList: ProductReducer,
  cartList: CartReducer,
  orderList: OrderReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
