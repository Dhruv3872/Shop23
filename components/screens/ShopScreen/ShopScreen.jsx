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
  let showModal = details.showProductDetails;
  console.log(showModal);
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
            dispatch(
              setProductDetails({
                title: '',
                uri: '',
                price: '',
                discountPercentage: '',
                showProductDetails: false,
              }),
            );
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
