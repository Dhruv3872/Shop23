import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export default function HomeScreen() {
  //To test Firebase Crashlytics:
  function crash() {
    console.log('within the function crash.');
    var x;
    /* The following line generates a TypeError in the development mode,
    which is the default behaviour of development mode, 
    since notAFunction() is not defined, 
    but it makes the application crash in the release apk.
    */
    x.notAFunction();
  }
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>HomeScreen</Text>
      <Button title="Crash the app!" onPress={crash} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
