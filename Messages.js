import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Appearance } from 'react-native'
import { Feather } from '@expo/vector-icons';
import darkMode from './styles/darkMode';
data = [
    {
        user: 'Jhon',
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'talk to u l8r • ',
        time: '2d'
    },
    {
        user: 'Samir',
        image: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'cya • ',
        time: '2d'
    },
    {
        user: 'Rami',
        image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'see u on monday • ',
        time: '2d'
    },
    {
        user: 'Marc',
        image: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'yesterday was fun , gn • ',
        time: '2d'
    },
    {
        user: 'Lea',
        image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'bye • ',
        time: '2d'
    }, {
        user: 'Muhannad',
        image: "https://images.pexels.com/photos/6969851/pexels-photo-6969851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'talk to you later • ',
        time: '2d'
    },
    {
        user: 'Ali',
        image: "https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'bye • ',
        time: '2d'
    },
    {
        user: 'Vahan',
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'Thanks! • ',
        time: '2d'
    },
    {
        user: 'Jennifer',
        image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'talk to you later • ',
        time: '2d'
    },
    {
        user: 'Marie',
        image: "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'Thanks! • ',
        time: '2d'
    },
    {
        user: 'Katy',
        image: "https://images.pexels.com/photos/4646246/pexels-photo-4646246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'talk to you later • ',
        time: '5d'
    },
    {
        user: 'Stephan',
        image: "https://images.pexels.com/photos/952005/pexels-photo-952005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'Cya! • ',
        time: '6d'
    },
    {
        user: 'Charbel',
        image: "https://images.pexels.com/photos/1484792/pexels-photo-1484792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        lastmessage: 'Thanks! • ',
        time: '7d'
    },
    {
        user: 'Ralph',
        image: "https://images.pexels.com/photos/7848986/pexels-photo-7848986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'Good luck! • ',
        time: '8d'
    },
    {
        user: 'Christian',
        image: "https://images.pexels.com/photos/2190377/pexels-photo-2190377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        lastmessage: 'Enjoy. • ',
        time: '9d'
    },

]

export default function Messages(props) {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme)
    })
    
    const messages = ({ item }) => (
    
        <View style={theme == 'light' ? styles.messagecontainer : darkMode.MessageMessageContainer}>
            <TouchableOpacity ><Image source={{ uri: item.image }} style={theme == 'light' ? styles.messageimg : darkMode.MessageImg} /></TouchableOpacity>
            <TouchableOpacity style={theme == 'light' ? styles.messageinfo : darkMode.MessageInfo} onPress={() => props.navigation.navigate('Chat')}>
                <Text style={theme == 'light' ? styles.username : darkMode.MessageUsername}>
                    {item.user}
                </Text>
                <View style={theme == 'light' ? styles.miscinfo : darkMode.MessageMiscInfo}>
                    <Text style={theme == 'light' ? styles.lastmessage : darkMode.MessageLastMessage}>
                        {item.lastmessage}
                    </Text>
                    <Text style={theme == 'light' ? styles.time : darkMode.MessageTime}>
                        {item.time}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity><Feather name="camera" color={"black"} size={25} style={theme == 'light' ? styles.MessageCameraIcon : darkMode.MessageCameraIcon} /></TouchableOpacity>
        </View>
    );
    

    return (
        <View style={theme == 'light' ? styles.container : darkMode.MessageContainer}>
            <FlatList
                showsVerticalScrollIndicator={false}
                renderItem={messages}
                data={data}
                style={theme == 'light' ? styles.messagefl : darkMode.MessageFl}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messagecontainer: {
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        alignSelf: 'center',
    },
    messageimg: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    miscinfo: {
        flexDirection: 'row',
    },
    messageinfo: {
        width: '70%',
        alignItems: 'flex-start'
    },
    lastmessage: {
        color: 'grey',
    },
    username: {
        fontSize: 20,
        fontWeight: '500'
    }

});
