import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Appearance } from 'react-native';
import darkMode from './styles/darkMode';

export default function Intro(props) {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })
    return (
        <SafeAreaView style={theme == 'light' ? styles.container : darkMode.IntroContainer}>

            <View style={theme == 'light' ? styles.title : darkMode.IntroTitle}>
                <Text style={theme == 'light' ? styles.titletxt : darkMode.IntroTitletxt}>
                    Instagram
                </Text>
            </View>
            <View style={theme == 'light' ? styles.btns : darkMode.IntroBtns}>
                <TouchableOpacity style={theme == 'light' ? styles.btn : darkMode.IntroBtn} onPress={() => { props.navigation.navigate('Login') }}>
                    <Text style={theme == 'light' ? styles.btntxt : darkMode.IntroBtntxt}>
                        Log in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme == 'light' ? styles.btn : darkMode.IntroBtn} onPress={() => { props.navigation.navigate('Signup') }}>
                    <Text style={theme == 'light' ? styles.btntxt : darkMode.IntroBtntxt}>
                        SIgn up
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 0.4,
        justifyContent: 'flex-end',
    },
    titletxt: {
        fontSize: 40,
        textAlign: 'center'
    },
    btns: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    btn: {
        backgroundColor: '#515bd4',
        width: '70%',
        height: '20%',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    btntxt: {
        fontSize: 15,
        color: 'white',
    }

})