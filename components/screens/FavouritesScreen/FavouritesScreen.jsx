import {StyleSheet, Text, View} from 'react-native';
import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber/native';
import Chair from './Chair';

import useControls from 'r3f-native-orbitcontrols';

export default function FavouritesScreen() {
  const [OrbitControls, events] = useControls();
  return (
    <View style={styles.container} {...events}>
      <Canvas>
        <OrbitControls enablePan={false} />
        {/* Apply lights from all the 6 directions: */}
        <directionalLight position={[1, 0, 0]} args={['white', 5]} />
        <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
        <directionalLight position={[0, 1, 0]} args={['white', 5]} />
        <directionalLight position={[0, -1, 0]} args={['white', 5]} />
        <directionalLight position={[0, 0, 1]} args={['white', 5]} />
        <directionalLight position={[0, 0, -1]} args={['white', 5]} />
        <Suspense fallback={null}>
          <Chair />
        </Suspense>
      </Canvas>
      <Text style={{color: 'black'}}>FavouritesScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
