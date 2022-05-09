import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React,{useState} from 'react';
import Photoscreen from './Photoscreen';
import Etiquetasscreen from './Etiquetasscreen';
import IGTVscreen from './IGTVscreen';
import { View , Appearance} from 'react-native';
const Tab = createMaterialTopTabNavigator();
import darkMode from './styles/darkMode';

export default function TopTabs() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })
  return (
    <View style={{height:'100%', overflow:'scroll'}}>
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: theme == 'light' ? 'black' : 'white',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'transparent' },
      tabBarIndicatorStyle : {
         backgroundColor : theme == 'light' ? 'black' : 'white',
      }}}>
      <Tab.Screen name="Photo" component={Photoscreen} />
      <Tab.Screen name="Etiquetas" component={Etiquetasscreen} />
      <Tab.Screen name="IGTV" component={IGTVscreen} />
    </Tab.Navigator>
    </View>
  );
}