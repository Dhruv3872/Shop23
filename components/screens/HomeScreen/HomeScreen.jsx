import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
// import crashlytics from '@react-native-firebase/crashlytics';

export default function HomeScreen() {
  //To test Firebase Crashlytics:
  function crash() {
    console.log('within the function crash.');
    // crashlytics().crash();
    var x;
    /* The following line generates a TypeError in the development mode, 
    but it should make the application crash in the release apk.
    That is an assumption.
    */
    x.notAFunction();
    // fatalError('Crash was triggered');
    // const x = 3 / 0;
    // console.log(x);
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
