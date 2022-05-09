import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView,Appearance } from 'react-native'
import { Feather } from '@expo/vector-icons';
import darkMode from './styles/darkMode';

export default function Requests(props) {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme)
    })
    return (
        <ScrollView>
            <View style={theme == 'light' ? styles.container : darkMode.Requests}>
                <Feather name="info" size={90} color={"black"} style={theme == 'light' ? styles.infoicon : darkMode.RequestsInfoIcon} />
                <Text style={theme == 'light' ? styles.messageinfotxt : darkMode.RequestsMessageInfotxt}>
                    No Message Requests
                </Text>
                <Text style={theme == 'light' ? styles.messageaddinfotxt : darkMode.RequestsMessageAddInfotxt}>
                    You don't have any message requests
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    messageinfotxt: {
        fontSize: 28,
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: '600',
    },
    messageaddinfotxt: {
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: '500',
        color: 'grey'
    },
    infoicon: {
        paddingTop: 50,
        paddingBottom: 30,
    }

});
