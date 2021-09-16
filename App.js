import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';


import { useFonts as useOswald,Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato,Lato_400Regular } from '@expo-google-fonts/lato'

import {theme} from './src/infrastructures/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/RestaurantContext';
import { LocationContextProvider } from './src/services/location/LocationContext';
import { AppNavigator } from './src/infrastructures/navigation/AppNavigation';
import { Navigation } from './src/infrastructures/navigation/index';


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
            <Navigation/>
          </RestaurantsContextProvider>
        </LocationContextProvider>

        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}