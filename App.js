import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Count from './screens/count.js';
import NextPage from './screens/NextPage.js';
import LoginPage from './screens/LoginPage.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="NextPage" component={NextPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
