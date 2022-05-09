import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Dimensions,
  FlatList,
  Appearance
} from "react-native";
const listTab = [{ status: "Phone" }, { status: "Email" }];
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import SignUpTabs from './SignUpTabs';
import darkMode from "./styles/darkMode";



export default function SignUpForm(props) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })
  return (
    <SafeAreaView style={theme == 'light' ? styles.container : darkMode.SignUpFormContainer}>
      <StatusBar />
      <View style={theme == 'light' ? styles.header : darkMode.SignUpFormHeader}>
        <View />
        <TouchableOpacity style={theme == 'light' ? styles.arrow : darkMode.SignUpFormArrow} onPress={() => { props.navigation.navigate('Signup') }}>
          <Ionicons style={theme == 'light' ? styles.arrow : darkMode.SignUpFormArrow} name="arrow-back-outline" color={theme == 'light' ? 'black' : 'white'} size={25} />
        </TouchableOpacity>
        <Text style={theme == 'light' ? styles.title : darkMode.SignUpFormTitle}>
          Enter Phone or Email
        </Text>
        <View />
      </View>
      
      <SignUpTabs/>

      <View style={theme == 'light' ? styles.hr : darkMode.SignUpFormHr}>
        <View style={theme == 'light' ? styles.lefthr : darkMode.SignUpFormLeftHr}></View>
        <View style={theme == 'light' ? styles.hrtxt : darkMode.SignUpFormHrtxt}>
          <Text style={theme == 'light' ? styles.or : darkMode.SignUpFormOr}>OR</Text>
        </View>
        <View style={theme == 'light' ? styles.righthr : darkMode.SignUpFormRightHr}></View>
      </View>
      <View style={theme == 'light' ? styles.fbv : darkMode.SignUpFormFbv}>
        <TouchableOpacity styles={theme == 'light' ? styles.fbbtn : darkMode.SignUpFormFbBtn} onPress={() => { props.navigation.navigate('Home') }}>
          <View style={theme == 'light' ? styles.fb : darkMode.SignUpFormFb}>
            <Ionicons name="logo-facebook" size={20} color={theme == 'light' ? 'black' : 'white'}  style={theme == 'light' ? styles.FaceBookIcon : darkMode.SignUpFormFbIcon}/>
            <Text style={theme == 'light' ? styles.fbtxt : darkMode.SignUpFormFbtxt}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={theme == 'light' ? styles.footer : darkMode.SignUpFormFooter}>
        <View style={theme == 'light' ? styles.fhr : darkMode.SignUpFormFhr}></View>
        <View style={theme == 'light' ? styles.footerinfo : darkMode.SignUpFormFooterInfo}>
          <Text style={theme == 'light' ? styles.foootertxt : darkMode.SignUpFormFootertxt}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity style={theme == 'light' ? styles.signupbtn : darkMode.SignUpFormSignUpBtn} onPress={() => { props.navigation.navigate('SignUpForm') }}>
            <Text style={theme == 'light' ? styles.signuptxt : darkMode.SignUpFormSignUptxt}>Sign In.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  hr: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lefthr: {
    width: "40%",
    backgroundColor: "grey",
    height: 0.5,
  },
  righthr: {
    width: "40%",
    backgroundColor: "grey",
    height: 0.5,
  },
  or: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: "grey",
    fontWeight: "600",
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
    flex: 0.5,
    paddingBottom:20,
  },
  footerinfo: {
    flexDirection: 'row',
  },
  signuptxt: {
    color: '#515db4'
  },
  fhr: {
    height: 0.2,
    backgroundColor: 'grey',
    marginBottom: 20,
    width: '100%',
  },
  fb: {
    flexDirection: "row",
    alignItems: 'center',
    borderColor: '#dfe4ea',
    borderRadius: 5,
    borderWidth: 2,
    height: 45,
    paddingHorizontal: 50,
    marginTop:20,
  },
  fbtxt: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    paddingHorizontal: 20,
  },
  fbv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    width: '80%',
  },
  inputphone: {
    backgroundColor: "#dfe4ea",
    paddingLeft: "5%",
    borderRadius: 5,
    height: 45,
  },
  btn: {
    backgroundColor: "#515bd4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 45,
  },
  nexttxt: {
    color: 'white',
  },
  infotxt: {
    color: 'grey',
    textAlign: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop:35,
    paddingBottom:10,
  },
  arrow: {
    position: 'absolute',
    left: 10,
    top: 18,
  },
});
