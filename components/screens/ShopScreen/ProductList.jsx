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
        columnWrapperStyle={styles.productList}
        data={processedResponse}
        renderItem={product => {
          return (
            <ProductCard
              title={product['item']['title']}
              uri={product['item']['images'][0]}
            />
          );
        }}
        numColumns={2}
      />
      {/* processedResponse is a constant we will use to render relevant items 
      based on the product filter and sort choices made by the user. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'orange',
    // borderWidth: 1,
  },
  productList: {
    justifyContent: 'center',
  },
});
