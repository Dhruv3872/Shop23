/* A slice of the global state to update the value of products array to be shown in the form of 
ProductCard components to the user on the ShopScreen. 
This has been put here as the app needs to make API calls to dummyjson API, 
and we should have a middleware to do that instead of doing it from within the component itself.
 */
/* We have used Redux Toolkit package, which is the modern and recommended way of setting up Redux
  with React / React Native projects as stressed upon by the  Redux team:
  https://redux.js.org/introduction/why-rtk-is-redux-today*/
import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  value: [],
  state: 'idle',
};

const productListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    /* Here, the state parameter represents the 'products' slice 
    of the global redux state.
     */
    productsFetched(state = initialState, action) {
      // console.log('inside productsFetched method.');
      state.value = action.payload;
    },
  },
});
//Here, the state parameter represents the global Redux state.
export const selectProducts = state => state.products.value;
export const {productsFetched} = productListSlice.actions;
export default productListSlice.reducer;
