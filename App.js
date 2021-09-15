import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'


import { useFonts as useOswald,Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato,Lato_400Regular } from '@expo-google-fonts/lato'

import {theme} from './src/infrastructures/theme';
import RestaurantScreen from './src/features/restaurants/screens/restaurant.screen';
import { View, Text } from 'react-native';
import { SafeArea } from './src/components/utility/SafeAreaComponent';
import { RestaurantsContextProvider } from './src/services/restaurants/RestaurantContext';
import { LocationContextProvider } from './src/services/location/LocationContext';

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
}

const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Map Screen</Text>
    </SafeArea>
  );
}

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => {
  const iconName= TAB_ICON[route.name]
  return {
    tabBarIcon: ({size, color}) => (
      // You can return any component that you like here!
      <Ionicons name={iconName} size={size} color={color} />
    ),
    // coloring
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }
}

export default function App() {
  const [oswaldLoaded] = useOswald({Oswald_400Regular})
  const [latoLoaded] = useLato({Lato_400Regular})

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
              screenOptions={screenOptions}
              >
                <Tab.Screen name="Restaurants" component={RestaurantScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>

        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}