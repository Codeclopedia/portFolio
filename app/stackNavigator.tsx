// app/StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './homescreen'; // Import your HomeScreen
import AboutPage from './about/index'; // Import the AboutPage

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerTransparent:true ,headerTitle:""}} name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutPage} />
      </Stack.Navigator>
    
  );
}
