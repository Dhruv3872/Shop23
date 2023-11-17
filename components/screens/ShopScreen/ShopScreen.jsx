import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

//ours:
import ProductList from './ProductList';
import SortDropdown from './SortDropdown';
import FilterDropdown from './FilterDropdown';
export default function ShopScreen() {
  const [chosenFilterValue, setChosenFilterValue] = useState('');
  function passFilterValue(value) {
    console.log('value passed to shopscreen: ' + value);
    setChosenFilterValue(value);
  }
  return (
    <View style={styles.container}>
      <View>
        <FilterDropdown passFilterValue={passFilterValue} />
        <SortDropdown />
      </View>
      <ProductList filterValue={chosenFilterValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
