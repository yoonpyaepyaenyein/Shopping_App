import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

import ProductReducer from './reducer/products';

const rootReducer = combineReducers({
  productsList: ProductReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
