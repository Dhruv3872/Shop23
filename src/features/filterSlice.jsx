/* A slice of the global state to update the value of
filter chosen by the user on the ShopScreen.
This has been put here as the value of the filter is needed
to be passed to the ProductList component from
the FilterDropdown component. */

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setFilterValue} = filterSlice.actions;
export const selectFilter = state => state.filter.value;

export default filterSlice.reducer;
