import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function BagScreen() {
  return (
    <View style={styles.container}>
      <Text>BagScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
