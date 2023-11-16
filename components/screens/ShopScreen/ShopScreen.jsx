import {StyleSheet, View} from 'react-native';
import React from 'react';

//ours:
import ProductList from './ProductList';
import SortDropdown from './SortDropdown';

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <SortDropdown />
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
});
