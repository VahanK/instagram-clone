import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity, Appearance } from 'react-native';
import Home from './Home';
import Explore from './Explore';
import Camera from './Camera';
import Profile from './Profile';
import Activity from './Activity';
import React, { useState } from 'react';
const Tab = createBottomTabNavigator();
import { Feather } from '@expo/vector-icons';
import darkMode from './styles/darkMode';

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45',
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {

    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme)
    })
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarshowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: theme == 'light' ? 'white' : 'black',
                    borderTopEndRadius: 20,
                    borderTopStartRadius: 20,
                    borderTopColor: 'black',
                    height: 70,
                    paddingBottom: 20,
                },
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: () => { return null },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Feather
                                name="home" size={24} color={theme == 'light' ? 'black' : 'white'}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Explore" component={Explore}
                options={{
                    headerShown: false,
                    tabBarLabel: () => { return null },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Feather
                                name="search" size={24} color={theme == 'light' ? 'black' : 'white'}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen name="Camera" component={Camera}
                options={{
                    headerShown: false,
                    tabBarLabel: () => { return null },
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="instagram" size={35} color={theme == 'light' ? 'white' : 'white'}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />
            <Tab.Screen name="Activity" component={Activity}
                options={{
                    headerShown: false,
                    tabBarLabel: () => { return null },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Feather
                                name="heart" size={24} color={theme == 'light' ? 'black' : 'white'}
                            />
                        </View>
                    )
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: () => { return null },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Feather
                                name="user" size={24} color={theme == 'light' ? 'black' : 'white'}
                            />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({

})
export default Tabs;