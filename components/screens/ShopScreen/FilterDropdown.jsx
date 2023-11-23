/* A component made to provide the user with the functionality of
filtering their product list view based on the product category. */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

//Redux:
import {useSelector, useDispatch} from 'react-redux';
import {setFilterValue, selectFilter} from '../../../src/features/filterSlice';
import {productsAsync} from '../../../src/features/productListSlice';

//third-party:
import {Dropdown} from 'react-native-element-dropdown';

//icons:
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {label: 'Smartphones', value: 'smartphones'},
  {label: 'Laptops', value: 'laptops'},
  {label: 'Fragrances', value: 'fragrances'},
  {label: 'Skincare', value: 'skincare'},
  {label: 'Groceries', value: 'groceries'},
  {label: 'Home-decoration', value: 'home-decoration'},
  {label: 'Furniture', value: 'furniture'},
  {label: 'Tops', value: 'tops'},
  {label: 'Womens dresses', value: 'womens-dresses'},
  {label: 'Womens shoes', value: 'womens-shoes'},
  {label: 'Mens shirts', value: 'mens-shirts'},
  {label: 'Mens shoes', value: 'mens-shoes'},
  {label: 'Mens watches', value: 'mens-watches'},
  {label: 'Womens watches', value: 'womens-watches'},
  {label: 'Womens bags', value: 'womens - bags'},
  {label: 'Womens jewellery', value: 'womens-jewellery'},
  {label: 'Sunglasses', value: 'sunglasses'},
  {label: 'Automotive', value: 'automotive'},
  {label: 'Motorcycle', value: 'motorcycle'},
  {label: 'Lighting', value: 'lighting'},
];

export default function FilterDropdown() {
  const [isFocus, setIsFocus] = useState(false);
  //Redux:
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const renderLabel = () => {
    if (filterValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Filter by category
        </Text>
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Choose a category' : '...'}
        searchPlaceholder="Search..."
        value={filterValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          setIsFocus(false);
        }}
        onChange={item => {
          setIsFocus(false);
          //Redux:
          dispatch(setFilterValue(item.value));
          dispatch(productsAsync({filterValue: item.value}));
        }}
        renderLeftIcon={() => (
          <Ionicons
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="filter-outline"
            size={20}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
