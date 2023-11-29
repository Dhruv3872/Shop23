import {StyleSheet, View, Modal} from 'react-native';
import React from 'react';

//Redux:
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {
  selectProductDetails,
  setProductDetails,
} from '../../../src/features/productDetailsSlice';

//ours:
import ProductList from './ProductList';
import FilterDropdown from './FilterDropdown';
import ProductDetails from './ProductDetails';

export default function ShopScreen() {
  const dispatch = useDispatch();
  const details = useSelector(selectProductDetails);
  /* The details object's keys method's output array's
  length will not be 0, but 11 when a product is clicked. */
  let showModal = Object.keys(details).length !== 0;
  return (
    <View style={styles.container}>
      <View>
        <FilterDropdown />
      </View>
      <View style={styles.list}>
        <ProductList />
      </View>
      {/* Used Modal to show ProductDetails component all over the screen: */}
      {showModal && (
        <Modal
          onRequestClose={() => {
            /* This resets the productDetails state to a null object.
            This is necessary to do as we want the variable 'showModal'
            to be false when the modal is closed. */
            dispatch(setProductDetails({}));
          }}>
          <ProductDetails />
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  list: {
    marginBottom: 160,
  },
});
