import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/router';
import { useFonts, Karla_400Regular, Karla_700Bold} from '@expo-google-fonts/karla';
import {AppLoading} from 'expo';




export default function App() {

  //colocando as fontes
  //usamos o apploading para não dar problema ao carregar
  let [fontLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold
  })

  if(!fontLoaded){
    return <AppLoading />;
  }
  //fim das fontes

  return (
    <>
      
      <StatusBar style="dark" backgroundColor="#000" translucent={true}  />
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
