import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ProductCard from './ProductCard';

import axios from 'axios';

export default function ProductList({filterValue}) {
  const [processedResponse, setProcessedResponse] = useState([]);
  console.log('received filter value at ProductList: ' + filterValue);
  let uri = 'https://dummyjson.com/products/?limit=0';
  if (processedResponse.length === 0) {
    // This is true when the user arrives on ShopScreen screen afresh.
    axios
      .get(uri)
      .then(function (response) {
        if (processedResponse != response['data']['products']) {
          setProcessedResponse(response['data']['products']);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  } else if (processedResponse[0]['category'] != filterValue) {
    /*This condition has to be checked to avoid sending the same request
    over and over again. */
    uri =
      'https://dummyjson.com/products/category/' + filterValue + '/?limit=0';
    axios
      .get(uri)
      .then(function (response) {
        if (processedResponse != response['data']['products']) {
          setProcessedResponse(response['data']['products']);
        }
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
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={styles.productList}
        data={processedResponse}
        renderItem={product => {
          return (
            <ProductCard
              title={product['item']['title']}
              uri={product['item']['thumbnail']}
              price={product['item']['price']}
              discountPercentage={product['item']['discountPercentage']}
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
  },
  productList: {
    justifyContent: 'center',
  },
});
