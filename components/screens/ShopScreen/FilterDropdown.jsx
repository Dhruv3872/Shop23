/* A component made to provide the user with the functionality of
filtering their product list view based on the product category. */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

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

  /* {label: 'Under $500', value: '<500'},
  {label: '$500 - $1000', value: '500-1000'},
  {label: '> $1000', value: '>1000'},
  {label: 'Discount > 10%', value: 'd>10'},
  {label: 'Discount > 15%', value: 'd>15'},
  {label: 'Rating > 4.5', value: 'r>4.5'},
  {label: 'Rating > 4', value: 'r>4'}, */
];

export default function FilterDropdown({passFilterValue}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
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
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          // console.log('value at filterdd: ' + value);
          passFilterValue(item.value);
          setIsFocus(false);
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
