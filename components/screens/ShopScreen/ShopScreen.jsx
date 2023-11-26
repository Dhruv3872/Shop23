import {StyleSheet, View} from 'react-native';
import React from 'react';

//ours:
import ProductList from './ProductList';
import FilterDropdown from './FilterDropdown';

export default function ShopScreen() {
  return (
    <View style={styles.container}>
      <View>
        <FilterDropdown />
      </View>
      <View style={styles.list}>
        <ProductList />
      </View>
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
