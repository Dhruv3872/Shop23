import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';

//Redux:
import {useSelector, useDispatch} from 'react-redux';
import {selectFilter} from '../../../src/features/filterSlice';
import {selectProducts} from '../../../src/features/productListSlice';

export default function ProductList() {
  //Redux:
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const products = useSelector(selectProducts);
  if (filterValue === null) {
    if (products.length === 0) {
      dispatch({
        type: 'PRODUCTS_FETCH_REQUESTED',
        payload: {filterValue: filterValue},
      });
    }
  }
  /*In case where filterValue !== null, the FilterDropdown component's 
  onChange prop is responsible for dispatching the productsAsync action. */
  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={styles.productList}
        data={products}
        renderItem={product => {
          return (
            <ProductCard
              title={product['item']['title']}
              uri={product['item']['thumbnail']}
              price={product['item']['price']}
              discountPercentage={product['item']['discountPercentage']}
            />
          );
        }}
        numColumns={2}
      />
      {/* products is a constant we use in this component to render relevant items
      based on the product filter choice made by the user. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productList: {
    justifyContent: 'center',
  },
});
