/* This component renders with relevant details when a user clicks on
any of the product cards listed through the ProductList component. */

import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

//Redux:
import {useSelector} from 'react-redux';
import {selectProductDetails} from '../../../src/features/productDetailsSlice';

//rnfirebase: for Google Analytics:
import analytics from '@react-native-firebase/analytics';

//Third-party:
import FastImage from 'react-native-fast-image';

//ours:
import ProductInfo from './ProductInfo';

export default function ProductDetails() {
  const details = useSelector(selectProductDetails);
  console.log(details);
  const id = details.id.toString(); /* since the received data type of 
  the value of the key id is 'number'. */
  return (
    <SafeAreaView
      /* Since we want to send the product's details 
      to Google Analytics.
      I tried to implement this onPress of ProductCard component, 
      but since we update the ProductDetails state on press through
      an API call, it takes time, and hence, the values of 
      'details.category' is returned undefined there.
      Hence, I implemented the logSelectContent method onLayout of 
      this component. */
      onLayout={async () =>
        await analytics().logSelectContent({
          content_type: details.category,
          item_id: id,
        })
      }
      style={styles.container}>
      <FastImage
        style={styles.productImage}
        source={{
          uri: details.images[0],
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
