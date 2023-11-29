import {call, put, takeLatest} from 'redux-saga/effects';

import axios from 'axios';
import {productsFetched} from '../features/productListSlice';
import {productDetailsFetched} from '../features/productDetailsSlice';

async function getProducts(filter) {
  // console.log('inside getProducts method.');
  let uri =
    filter === null
      ? 'https://dummyjson.com/products/?limit=0'
      : 'https://dummyjson.com/products/category/' + filter + '/?limit=0';
  const response = await axios
    .get(uri)
    .then(function (response) {
      return response['data']['products'];
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  //   console.log(response);
  return response;
}
/* runs to obtain details of a single product whose product card
has been clicked. */
async function getProductDetails(id) {
  let uri = 'https://dummyjson.com/products/' + id;
  const response = await axios
    .get(uri)
    .then(function (response) {
      return response['data'];
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return response;
}

// worker Saga: will be fired on PRODUCTS_FETCH_REQUESTED action
function* fetchProducts(action) {
  // console.log('inside fetch products method.');
  try {
    products = yield call(getProducts, action.payload.filterValue);
    yield put(productsFetched(products));
  } catch (e) {
    yield put({type: 'PRODUCTS_FETCH_FAILED', message: e.message});
  }
}

// worker Saga: will be fired on PRODUCT_DETAILS_REQUESTED action
function* fetchProductDetails(action) {
  try {
    productDetails = yield call(getProductDetails, action.payload.id);
    yield put(productDetailsFetched(productDetails));
  } catch (e) {
    yield put({type: 'PRODUCT_DETAILS_FETCH_FAILED', message: e.message});
  }
}

/*Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
dispatched while a fetch is already pending, that pending fetch is cancelled
and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest('PRODUCTS_FETCH_REQUESTED', fetchProducts);
  yield takeLatest('PRODUCT_DETAILS_REQUESTED', fetchProductDetails);
}

export default mySaga;
