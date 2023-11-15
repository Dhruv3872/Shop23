import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Third-party:
import FastImage from 'react-native-fast-image';

export default function ProductCard({title, uri}) {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.productImage}
        source={{
          uri: uri,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  title: {
    width: 175,
    fontSize: 24,
    fontFamily: 'normal',
    fontWeight: '900',
    textAlign: 'center',
  },
  productImage: {
    width: 175,
    height: 200,
    borderRadius: 16,
    marginBottom: 8,
  },
  productImageContainer: {
    flex: 1,
  },
});
