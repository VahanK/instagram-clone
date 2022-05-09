import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  PixelRatio,
  TextInput,
  LogBox,
  Appearance
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
var widthh = PixelRatio.getPixelSizeForLayoutSize(width);
var heightt = PixelRatio.getPixelSizeForLayoutSize(height);
import darkMode from './styles/darkMode';

export default function EmailScreen(props) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme) => {
        setTheme(scheme.colorScheme)
    })
  return (

    <View style={theme == 'light' ? styles.container : darkMode.EmailScreenContainer}>
      <TextInput
        placeholder="Email Address"
        keyboardType="email-address"
        placeholderTextColor={'grey'}
        style={theme == 'light' ? styles.input :darkMode.EmailScreenInput}
      />
      <TouchableOpacity
        onPress={() => { props.navigation.navigate('Tabs') }}
        style={theme == 'light' ? styles.touchable : darkMode.EmailScreenTouchable}
      >
        <Text style={theme == 'light' ? styles.buttontxt : darkMode.EmailScreenButtontxt}>Next</Text>
      </TouchableOpacity>
      <Text style={theme == 'light' ? styles.txt : darkMode.EmailScreentxt}>You may receive email updates from Instagram and can opt out any time.</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    height: 300,
  },
  input: {
    marginTop: -80,
    width: '90%',
    backgroundColor: '#a5b1c2',
    paddingLeft: '5%',
    height: 45,
    borderRadius: 10,
  },
  touchable: {
    backgroundColor: '#3867d6',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttontxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400'
  },
  txt: {
    textAlign: 'center',
    width: '90%',
    color: 'grey',
    paddingTop: 20,
  }
});
