import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackNavigator } from './Navigators/AuthStackNavigator';
import { MainStackNavigator } from './Navigators/MainStackNavigator';

import { lightTheme } from './themes/light';
import { AuthContext } from './contexts/AuthContext';
import { UserContext } from './contexts/UserContext';
import { useAuth } from './hooks/useAuth';
import { SplashScreen } from './screens/SplashScreen';


const RootStack = createStackNavigator();
const MainStack = createStackNavigator();



export default function App(){

  const {auth, state} = useAuth();
  function RenderScreens(){
    if(state.loading){
      return <RootStack.Screen name={"Splash"} component={SplashScreen}></RootStack.Screen>
    }
  return state.user ? 
  (<RootStack.Screen name="MainStack" >
    {
      ()=> (
        <UserContext.Provider value={state.user}>
        <MainStackNavigator/>
        </UserContext.Provider>
      )
    }
  </RootStack.Screen>) 
   : (<RootStack.Screen name="AuthStack" component={AuthStackNavigator}></RootStack.Screen>)
  }
  return (
    <AuthContext.Provider value={auth}>
    <NavigationContainer theme={lightTheme}>
    <RootStack.Navigator screenOptions={{
      headerShown: false
    }}>
    {RenderScreens()}
      

    </RootStack.Navigator>   
    </NavigationContainer>
    </AuthContext.Provider>
  )
}
