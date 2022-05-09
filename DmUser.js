import React,{useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, TextInput, FlatList, StyleSheet, Appearance } from 'react-native'
import { Feather } from "@expo/vector-icons";
import MessageTab from './MessageTab';
import darkMode from './styles/darkMode';


export default function DmUser(props) {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme)
    })
    return (
        <SafeAreaView style={theme == 'light' ? styles.container : darkMode.DmUserContainer}>
            <View style={theme == 'light' ? styles.header : darkMode.DmUserHeader}>
                <View style={theme == 'light' ? styles.headerusername : darkMode.DmUserHeaderUsername}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Tabs')}>
                        <Feather name="arrow-left" size={30} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.ArrowLeft : darkMode.DmUserArrowLeft} />
                    </TouchableOpacity>
                    <Text style={theme == 'light' ? styles.headerusername : darkMode.DmUserHeaderUsernametxt}>Mauricio Lopez</Text>
                </View>
                <View style={theme == 'light' ? styles.headericons : darkMode.DmUserHeaderIcons}>
                    <TouchableOpacity>
                        <Feather name="video" size={30} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.video : darkMode.DmUserVideo} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="edit" size={25} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.addbutton : darkMode.DmUserAddButton} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={theme == 'light' ? styles.dmtab : darkMode.DmUserDmTab}>
                <MessageTab />
                <View style={{ height: 40 }} />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    dmtab: {
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '98%',
        alignSelf: 'center',
        paddingTop: 5,
    },
    headerusername: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        fontSize: 20,
        fontWeight: '500',
    },
    headericons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addbutton: {
        paddingHorizontal: 7,
    }

})