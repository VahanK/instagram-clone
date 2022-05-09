import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Appearance
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import darkMode from './styles/darkMode';

export default function Login(props) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })
  const [username, onChangeName] = React.useState(null);
  const [password, onChangePass] = React.useState(null);
  return (
    <SafeAreaView style={theme == 'light' ? styles.container : darkMode.LoginContainer}>
      <View style={theme == 'light' ? styles.title : darkMode.LoginTitle}>
        <Text style={theme == 'light' ? styles.titletxt : darkMode.LoginTitletxt}>Instagram</Text>
      </View>
      <View style={theme == 'light' ? styles.inputs : darkMode.LoginInputs}>
        <TextInput
          style={theme == 'light' ? styles.input : darkMode.LoginInput}
          onChangeText={onChangeName}
          value={username}
          placeholder="Phone number,username or email"
          placeholderTextColor={'grey'}
        />
        <View style={{ height: 10 }} />
        <TextInput
          style={theme == 'light' ? styles.inputpass : darkMode.LoginInputPass}
          onChangeText={onChangePass}
          value={password}
          placeholder="Password"
          placeholderTextColor={'grey'}
        />
        <View style={theme == 'light' ? styles.forgotpass : darkMode.LoginForgotPass}>
          <TouchableOpacity style={theme == 'light' ? styles.forgot : darkMode.LoginForgot}>
            <Text style={theme == 'light' ? styles.forgottxt : darkMode.LoginForgottxt}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={theme == 'light' ? styles.btn : darkMode.LoginBtn} onPress={() => { props.navigation.navigate('Tabs') }}>
          <Text style={theme == 'light' ? styles.btntxt : darkMode.LoginBtnTxt}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={theme == 'light' ? styles.hr : darkMode.LoginHr}>
        <View style={theme == 'light' ? styles.lefthr : darkMode.LoginLeftHr}></View>
        <View style={theme == 'light' ? styles.hrtxt : darkMode.LoginHrtxt}>
          <Text style={theme == 'light' ? styles.or : darkMode.LoginOr}>OR</Text>
        </View>
        <View style={theme == 'light' ? styles.righthr : darkMode.LoginRightHr}></View>
      </View>
      <View style={theme == 'light' ? styles.fbv : darkMode.LoginFbv}>
        <TouchableOpacity styles={theme == 'light' ? styles.fbbtn : darkMode.LoginFbbtn}>
          <View style={styles.fb}>
            <Ionicons name="logo-facebook" color={"blue"} size={20} style={theme == 'light' ? styles.facebookicon : darkMode.LoginFacebookIcon} />
            <Text style={theme == 'light' ? styles.fbtxt : darkMode.LoginFbtxt}> Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={theme == 'light' ? styles.footer : darkMode.LoginFooter}>
        <View style={theme == 'light' ? styles.fhr : darkMode.LoginFhr}></View>
        <View style={theme == 'light' ? styles.footerinfo : darkMode.LoginFooterInfo}>
          <Text style={theme == 'light' ? styles.foootertxt : darkMode.LoginFootertxt}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity style={theme == 'light' ? styles.signupbtn : darkMode.LoginSignUpbtn} onPress={() => { props.navigation.navigate('SignUpForm') }}>
            <Text style={theme == 'light' ? styles.signuptxt : darkMode.LoginSignUptxt}>Sign Up.</Text>
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
  title: {
    flex: 0.4,
    justifyContent: "flex-end",
  },
  titletxt: {
    fontSize: 40,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#515bd4",
    width: "90%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btntxt: {
    fontSize: 15,
    color: "white",
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
  fbimg: {
    width: 25,
    height: 25,
  },
  input: {
    backgroundColor: "#dfe4ea",
    width: "90%",
    height: "15%",
    paddingLeft: "5%",
    borderRadius: 5,
  },
  inputpass: {
    backgroundColor: "#dfe4ea",
    width: "90%",
    height: "15%",
    paddingLeft: "5%",
    borderRadius: 5,
  },
  inputs: {
    justifyContent: "center",
    alignItems: "center",
  },
  forgotpass: {
    width: "90%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: 10,
    paddingBottom: 20,
  },
  forgottxt: {
    color: '#515bd4'
  },
  fb: {
    flexDirection: "row",
    alignItems: 'center',
    padding: '10%',
  },
  fbtxt: {
    color: '#515bd4',
    fontSize: 15,
    fontWeight: '500',
  },
  fbv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
    flex: 0.5,
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
  }
});
