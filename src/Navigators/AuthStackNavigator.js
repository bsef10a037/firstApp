import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterationScreen } from '../screens/RegisterationScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export function AuthStackNavigator(){
  return (
    <AuthStack.Navigator screenOptions={{
        headerShown: false,
      }}
      mode = {'modal'}
      >
      <AuthStack.Screen name="LoginStack" >
      {
        () => (
          <LoginStack.Navigator mode={'card'}
          screenOptions={{
        headerShown: false,
      }}
          >
            <LoginStack.Screen name={"Login"} component={LoginScreen}></LoginStack.Screen>
          </LoginStack.Navigator>
        )
      }
      
      </AuthStack.Screen>
      <AuthStack.Screen name="Registeration" component={RegisterationScreen} />
    </AuthStack.Navigator>
  )
}
