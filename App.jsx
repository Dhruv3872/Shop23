import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

//react-navigation:
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//custome-made components:
//tab navigation screens:
import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import ShopScreen from './components/screens/ShopScreen/ShopScreen';
import BagScreen from './components/screens/BagScreen/BagScreen';
import FavouritesScreen from './components/screens/FavouritesScreen/FavouritesScreen';
import ProfileScreen from './components/screens/ProfileScreen/ProfileScreen';

function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Tab.Navigator
        sceneContainerStyle={styles.tabScreens}
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let icon;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Bag') {
              iconName = focused ? 'bag-handle' : 'bag-handle-outline';
            } else if (route.name === 'Favourites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
            icon = <Ionicons name={iconName} size={size} color={color} />;
            return icon;
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Bag" component={BagScreen} />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabScreens: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
