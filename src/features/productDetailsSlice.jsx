/* A slice of the global state to update the value of 
the product details based on the product card clicked by the user on the ShopScreen. 
This has been put here as the details of the selected product are needed
to be passed to the ProductDetails component from the ProductCard component. */

import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  value: {} /* Initiated 'productDetails' state slice 
  as an empty object since the API call for 
  the details of a single product returns an object. */,
};

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.value = action.payload;
    },
    productDetailsFetched: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {productDetailsFetched, setProductDetails} =
  productDetailsSlice.actions;
export const selectProductDetails = state => state.productDetails.value;
export default productDetailsSlice.reducer;
