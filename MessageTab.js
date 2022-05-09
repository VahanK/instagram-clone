import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React,{useState} from 'react';
import Messages from './Messages';
import Requests from './Requests';
import { View,StyleSheet,Appearance } from 'react-native';
import darkMode from './styles/darkMode';
const Tab = createMaterialTopTabNavigator();

export default function MessageTab() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })
  return (
    <View style={theme == 'light' ? styles.empty : darkMode.MessageTabEmpty}>
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: theme == 'light' ? 'black' : 'white',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'transparent' },
      tabBarIndicatorStyle : {
         backgroundColor : theme == 'light' ? 'black' : 'white',
      }}}>
      <Tab.Screen name="All" component={Messages} />
      <Tab.Screen name="Requests" component={Requests}/>
    </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
    empty: {
      height:'100%',
      flex:1 
    }
})