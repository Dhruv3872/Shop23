//The Redux store:
import {configureStore} from '@reduxjs/toolkit';
import filterReducer from '../features/filterSlice';
import productListReducer from '../features/productListSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productListReducer,
  },
});
