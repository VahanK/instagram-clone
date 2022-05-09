import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
  SafeAreaView,
  Appearance
} from "react-native";
const windowHeight = Dimensions.get('window').height;
import darkMode from './styles/darkMode';

import { Feather } from "@expo/vector-icons";
export default function Activity(props) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })
  return (
    <SafeAreaView style={theme == 'light' ? styles.container : darkMode.ActivityContainer}>
      <StatusBar />
      <View style={theme == 'light' ? styles.header : darkMode.ActivityHeader}>
        <TouchableOpacity>
          <Feather name="plus-circle" size={30} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.ActivityCircle : darkMode.ActivityCircle} />
        </TouchableOpacity>
        <Text style={theme == 'light' ? styles.insta : darkMode.ActivityInsta}>Instagram</Text>
        <TouchableOpacity>
          <Feather name="message-circle" size={30} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.ActivityMessage : darkMode.ActivityMessage} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={theme == 'light' ? styles.main : darkMode.ActivityMain}>
          <Text style={theme == 'light' ? styles.notif : darkMode.ActivityNotif}>No New Notifications.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: '-10%',
  },
  insta: {
    fontSize: 30,
    fontWeight: "400",
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingVertical: windowHeight / 3
  },
  notif: {
    fontSize: 20,
    fontWeight: "600",
    textAlignVertical: "center",
  },
});
