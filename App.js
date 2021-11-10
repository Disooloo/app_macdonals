import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import Popular from './src/components/Popular';

import { COLORS} from './constants';


export default function App() {
  return (
    <View style={{	padding: 24, paddingTop: 55, paddingBottom: 75, backgroundColor: COLORS.black,}}>
     
      <Header />  
      <Categories />
      <Popular />
    </View>
  );
}
