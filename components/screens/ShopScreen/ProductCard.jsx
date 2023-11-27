import {StyleSheet, View} from 'react-native';
import React from 'react';

//Redux:
import {useDispatch} from 'react-redux';
import {setProductDetails} from '../../../src/features/productDetailsSlice';
//Third-party:
import FastImage from 'react-native-fast-image';

//ours:
import ProductInfo from './ProductInfo';
import {Pressable} from 'react-native';

export default function ProductCard({title, uri, price, discountPercentage}) {
  const dispatch = useDispatch();
  return (
    <View>
      {/* Made the entire product card pressable so that the user may click anywhere 
      on it to go to the corresponding details page. */}
      <Pressable
        onPress={() => {
          dispatch(
            setProductDetails({
              title: title,
              uri: uri,
              price: price,
              discountPercentage: discountPercentage,
              showProductDetails: true,
            }),
          );
        }}>
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
      </Pressable>
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
