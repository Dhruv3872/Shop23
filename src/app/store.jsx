//The Redux store:
import {configureStore} from '@reduxjs/toolkit';
//reducers:
import filterReducer from '../features/filterSlice';
import productsReducer from '../features/productListSlice';
//Redux-Saga:
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(mySaga);
