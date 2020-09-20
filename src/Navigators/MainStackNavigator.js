import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsListScreen } from '../screens/ProductsListScreen';


const MainStack = createStackNavigator();

export function MainStackNavigator(){
  return (
    <MainStack.Navigator screenOptions={{
        headerShown: true,
      }}
      >

      <MainStack.Screen name="ProductsList" component={ProductsListScreen} />
    </MainStack.Navigator>
  )
}
