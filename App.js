
import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigator from './apps/TabNavigator/RootNavigator ';




export default function App() {
  return (
    <>
    
    <StatusBar hidden/>
    <RootNavigator/>
    </>
  );
}


