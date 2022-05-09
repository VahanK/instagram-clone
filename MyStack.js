import React from 'react';
import Intro from './Intro';
import Login from './Login';
import Signup from './Signup';
import SignUpForm from './SignUpForm';
import Tabs from './Tabs';
import DmUser from './DmUser';
import Home from './Home';
import IGTVscreen from './IGTVscreen';
import Messages from './Messages';
import PhoneScreen from './PhoneScreen';
import PhotoScreen from './Photoscreen';
import Profile from './Profile';
import SignUpTabs from './SignUpTabs';
import TopTabs from './TopTabs';
import Activity from './Activity';
import Camera from './Camera';
import EmailScreen from './EmailScreen';
import Etiquetasscreen from './Etiquetasscreen';
import Explore from './Explore';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Intro" component={Intro}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="SignUpForm" component={SignUpForm}/>
            <Stack.Screen name="Tabs" component={Tabs}/>
            <Stack.Screen name="DmUser" component={DmUser}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="IGTVscreen" component={IGTVscreen}/>
            <Stack.Screen name="Messages" component={Messages}/>
            <Stack.Screen name="PhoneScreen" component={PhoneScreen}/>
            <Stack.Screen name="PhotoScreen" component={PhotoScreen}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="SignUpTabs" component={SignUpTabs}/>
            <Stack.Screen name="TopTabs" component={TopTabs}/>
            <Stack.Screen name="Camera" component={Camera}/>
            <Stack.Screen name="EmailScreen" component={EmailScreen}/>
            <Stack.Screen name="Etiquetasscreen" component={Etiquetasscreen}/>
            <Stack.Screen name="Activity" component={Activity}/>
            <Stack.Screen name="Explore" component={Explore}/>
        </Stack.Navigator>
    );
}