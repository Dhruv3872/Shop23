import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>FavouritesScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
