import {StyleSheet, View} from 'react-native';
import React from 'react';

//ours:
import ProductList from './ProductList';

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
