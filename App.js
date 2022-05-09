import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>

  );
}