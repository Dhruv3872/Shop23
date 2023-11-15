import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ProductCard from './ProductCard';

import axios from 'axios';

export default function ProductList() {
  const [processedResponse, setProcessedResponse] = useState([]);
  function getProductList() {
    axios
      .get('https://dummyjson.com/products/?limit=100')
      .then(function (response) {
        setProcessedResponse(response['data']['products']);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  return (
    <View style={styles.container} onLayout={getProductList}>
      <FlatList
        data={processedResponse}
        renderItem={product => {
          console.log(product);
          return <ProductCard title={product['item']['title']} />;
        }}
      />
      {/* processedResponse is a constant we will use to render relevant items 
      based on the product filter and sort choices made by the user. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
