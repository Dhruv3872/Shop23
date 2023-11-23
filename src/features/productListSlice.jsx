/* A slice of the global state to update the value of products array to be shown in the form of 
ProductCard components to the user on the ShopScreen. 
This has been put here as the app needs to make API calls to dummyjson API, 
and we should have a middleware to do that instead of doing it from within the component itself.
 */

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import axios from 'axios';

const initialState = {
  value: [],
  state: 'idle',
};

export const productsAsync = createAsyncThunk(
  'products/fetchProducts',
  async object => {
    /* We are passing {filterValue: filterValue} object
  as a parameter of the productsAsync action. */
    const filter = object.filterValue;
    let uri =
      filter === null
        ? 'https://dummyjson.com/products/?limit=0'
        : 'https://dummyjson.com/products/category/' + filter + '/?limit=0';
    const response = await axios
      .get(uri)
      .then(function (response) {
        // console.log(response['config']['url']);
        return response['data']['products'];
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    return response;
  },
);

export const productListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    /* no reducer is needed for the application for which 
     this state slice has been written. */
  },
  extraReducers: builder => {
    builder
      .addCase(productsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(productsAsync.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = 'idle';
      });
  },
});

export const {setProducts} = productListSlice.actions;
export const selectProducts = state => state.products.value;

export default productListSlice.reducer;
