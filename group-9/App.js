import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import soon from "./screens/commingsoon.js";
import LoginScreen from "./screens/loginScreen.js";
import HomeScreen from "./screens/homeScreen.js";
import SettingsScreen from "./screens/settingsScreen.js";
import ActiveStartupsScreen from "./screens/activeStartupsScreen.js";
import ListOfStartupsScreen from "./screens/listOfStartupsScreen.js";
  
import AddStartup from "./screens/addStartupScreen.js";
import StartupScreen from "./screens/StartupScreen.js";
import AboutScreen from './screens/AboutScreen.js'
import TermsOfUseScreen from './screens/TermsOfUseScreen.js'

import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

/*

function MainTabs() {
  return (
      <Tabs.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'New') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: '#007aff',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tabs.Screen name="Feed" component={HomeScreen} />
        <Tabs.Screen name="New" component={NewPostScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
      </Tabs.Navigator>
  );
}
*/

function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "AddStartup") {
            iconName = focused ? "trending-up" : "trending-up-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } 

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007aff",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tabs.Screen name="AddStartup" component={AddStartup} />
      <Tabs.Screen name="Profile" component={SettingsScreen} />
    </Tabs.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="StList" component={ListOfStartupsScreen} 
          options={{ headerShown: false }}/>
        <Stack.Screen name="soon" component={soon} />
        <Stack.Screen name="StartupScreen" component={StartupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={AboutScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Terms" component={TermsOfUseScreen} options={{headerShown: false}}/>
        
        <Stack.Screen name="Active Startups" component={ActiveStartupsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
