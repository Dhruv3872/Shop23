/* This component contains product's information that is shown when 
the ShopScreen is rendered. Instead of coding for product title, price, 
discount etc info within the ProductCard component, we thought of 
separating these details into a standalone component. */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ProductInfo({title, price, discountPercentage}) {
  const discount = Math.floor(parseFloat(discountPercentage));
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}$</Text>
        <Text style={styles.discountPercentage}>-{discount}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    width: 175,
    fontSize: 24,
    fontFamily: 'normal',
    fontWeight: '900',
    // textAlign: 'center',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  price: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 10,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  discountPercentage: {
    color: 'red',
    fontSize: 20,
    fontWeight: '700',
    backgroundColor: '#d9ffb3',
    borderRadius: 12,
  },
});
