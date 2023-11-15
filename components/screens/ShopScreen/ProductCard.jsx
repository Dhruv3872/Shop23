import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Third-party:
import FastImage from 'react-native-fast-image';

export default function ProductCard({title}) {
  return (
    <View>
      <FastImage
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png',
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
