import {StyleSheet, View} from 'react-native';
import React from 'react';

//Third-party:
import FastImage from 'react-native-fast-image';

//ours:
import ProductInfo from './ProductInfo';

export default function ProductCard({title, uri, price, discountPercentage}) {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.productImage}
        source={{
          uri: uri,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <ProductInfo
        title={title}
        price={price}
        discountPercentage={discountPercentage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  productImage: {
    width: 175,
    height: 200,
    borderRadius: 16,
    marginBottom: 8,
    // borderColor: 'brown',
    // borderWidth: 1,
  },
});
