import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import { Text } from 'react-native';
import { SafeArea } from '../../components/utility/SafeAreaComponent';
import { RestaurantsNavigator } from './RestaurantNavigator';
import { MapScreen } from '../../features/map/screen/MapScreen';

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
}
const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      // You can return any component that you like here!
      <Ionicons name={iconName} size={size} color={color} />
    ),
    // coloring
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }
}


export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={screenOptions}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Map" component={MapScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  </NavigationContainer>
)