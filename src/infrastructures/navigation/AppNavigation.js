import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import { RestaurantsContextProvider } from '../../services/restaurants/RestaurantContext'; 
import { LocationContextProvider } from '../../services/location/LocationContext'; 
import { FavoritesContextProvider } from '../../services/favorites/FavoriteContext';


import { Text, Button } from 'react-native';
import { SafeArea } from '../../components/utility/SafeAreaComponent';
import { RestaurantsNavigator } from './RestaurantNavigator';
import { MapScreen } from '../../features/map/screen/MapScreen';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContex';

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
}
const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext)
  return (
    <SafeArea>
      <Text>Settings!</Text>
      <Button title="Logout" onPress={() => onLogout()} />
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
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={screenOptions}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>

      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
)