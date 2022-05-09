import { createMaterialTopTabNavigator, } from '@react-navigation/material-top-tabs';
import React,{useState} from 'react';
import EmailScreen from'./EmailScreen';
import PhoneScreen from './PhoneScreen';
import { View ,Appearance} from 'react-native';
const Tab = createMaterialTopTabNavigator();
import darkMode from './styles/darkMode';

export default function SignUpTabs() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: theme == 'light' ? 'black' : 'white',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'transparent' },
      tabBarIndicatorStyle : {
         backgroundColor : theme == 'light' ? 'black' : 'white',
      }}}>
      <Tab.Screen name="Phone" component={PhoneScreen} />
      <Tab.Screen name="Email" component={EmailScreen} />
    </Tab.Navigator>
  );
}