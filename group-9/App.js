import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from "./screens/loginScreen.js";
import HomeScreen from './screens/homeScreen.js';
import SettingsScreen from './screens/settingsScreen.js';
import ActiveStartupsScreen from './screens/activeStartupsScreen.js';
import ListOfStartupsScreen from './screens/listOfStartupsScreen.js';



const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();



function MainTabs (){
  return(
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen } />
      <Tabs.Screen name="ActStart" component={ActiveStartupsScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  )
}


export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Tabs" component={MainTabs} />
       <Stack.Screen name="StList" component={ListOfStartupsScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
