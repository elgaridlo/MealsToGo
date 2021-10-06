import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as firebase from 'firebase'

import { useFonts as useOswald,Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato,Lato_400Regular } from '@expo-google-fonts/lato'

import {theme} from './src/infrastructures/theme';
import { Navigation } from './src/infrastructures/navigation/index';
import { AuthenticationContextProvider } from './src/services/authentication/AuthenticationContex';

const firebaseConfig = {
  apiKey: "AIzaSyAxxVa9vm-o6Q0JFCSpPRW0CUU1AMolAhU",
  authDomain: "mealstogo-a671d.firebaseapp.com",
  projectId: "mealstogo-a671d",
  storageBucket: "mealstogo-a671d.appspot.com",
  messagingSenderId: "1096375713515",
  appId: "1:1096375713515:web:9a0384c1b2a96a74edc8ae"
};

// kalau enggak punya firebase app running baru dimasukin ke initializaeApp
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
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
        <AuthenticationContextProvider>
          <Navigation/>
        </AuthenticationContextProvider>
        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}