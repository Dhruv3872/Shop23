/* This component renders with relevant details when a user clicks on
any of the product cards listed through the ProductList component. */

import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

//Redux:
import {useSelector} from 'react-redux';
import {selectProductDetails} from '../../../src/features/productDetailsSlice';

//Third-party:
import FastImage from 'react-native-fast-image';

//ours:
import ProductInfo from './ProductInfo';

export default function ProductDetails() {
  const details = useSelector(selectProductDetails);
  console.log(details);
  return (
    <SafeAreaView style={styles.container}>
      <FastImage
        style={styles.productImage}
        source={{
          uri: details.uri,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <ProductInfo
        title={details.title}
        price={details.price}
        discountPercentage={details.discountPercentage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  productImage: {
    width: '80%',
    height: '80%',
    borderRadius: 16,
    marginBottom: 8,
  },
});
