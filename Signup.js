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
import darkMode from './styles/darkMode';
export default function Signup(props) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })
  const [username, onChangeName] = React.useState(null);
  const [password, onChangePass] = React.useState(null);
  return (
    <SafeAreaView style={theme == 'light' ? styles.container : darkMode.SignUpContainer}>
      <View style={theme == 'light' ? styles.title : darkMode.SignUpTitle}>
        <Text style={theme == 'light' ? styles.titletxt : darkMode.SignUpTitletxt}>Instagram</Text>
        <Text style={theme == 'light' ? styles.titleinfo : darkMode.SignUpTitleInfo}>
            Sign Up to see photos and videos from your friends
        </Text>
      </View>
      <TouchableOpacity style={theme == 'light' ? styles.continuev : darkMode.SignUpContinueV}>
      <View style={theme == 'light' ? styles.continuev : darkMode.SignUpContinueV}>
      <TouchableOpacity styles={theme == 'light' ? styles.continuebtn : darkMode.SignUpContinueBtn}>
     
        <View style={theme == 'light' ? styles.continuechild : darkMode.SignUpContinueChild}>
          <Text style={theme == 'light' ? styles.continuetxt : darkMode.SignUpContinuetxt}>Continue with Facebook</Text>
        </View>
        
      </TouchableOpacity>
      </View>
      </TouchableOpacity>
     
      <View style={theme == 'light' ? styles.hr : darkMode.SignUpHr}>
        <View style={theme == 'light' ? styles.lefthr : darkMode.SignUpLeftHr}></View>
        <View style={theme == 'light' ? styles.hrtxt : darkMode.SignUpHrtxt}>
          <Text style={theme == 'light' ? styles.or : darkMode.SignUpOr}>OR</Text>
        </View>
        <View style={theme == 'light' ? styles.righthr : darkMode.SignUpRightHr}></View>
      </View>
      <View style={theme == 'light' ? styles.phone : darkMode.SignUpPhone}>
      <TouchableOpacity styles={theme == 'light' ? styles.fbbtn : darkMode.SignUpFbBtn} onPress={() => { props.navigation.navigate('SignUpForm') }}>
        <View style={theme == 'light' ? styles.fb : darkMode.SignUpFb}>
          <Text style={theme == 'light' ? styles.fbtxt : darkMode.SignUpFbtxt}>Sign Up With Phone or Email</Text>
        </View>
      </TouchableOpacity>
      </View>

      <View style={theme == 'light' ? styles.footer : darkMode.SignUpFooter}>
        <View style={theme == 'light' ? styles.fhr : darkMode.SignUpFhr}></View>
        <View style={theme == 'light' ? styles.footerinfo : darkMode.SignUpFooterInfo}>
          <Text style={theme == 'light' ? styles.foootertxt : darkMode.SignUpFootertxt}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity style={theme == 'light' ? styles.signupbtn : darkMode.SignUpSignUpBtn} onPress={() => { props.navigation.navigate('Login') }}>
              <Text style={theme == 'light' ? styles.signuptxt : darkMode.SignUpSignUptxt}>Sign In.</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    flex: 0.4,
    justifyContent: "flex-end",
    width:'70%',
  },
  titletxt: {
    fontSize: 40,
    textAlign: "center",
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
    width: 35,
    height: 25,
  },
  fb: {
    flexDirection: "row",
    alignItems:'center',
    padding:'10%',
  },
  fbv: {
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#515db4',
      width:'90%',
      height:'15%',
      borderRadius:20,
  },
  titleinfo: {
      textAlign:'center',
      color:'grey',
      marginVertical:10,
  },
  fbtxt: {
      color:'#515bd4',
      fontSize:12,
      fontWeight:'500',
  } ,
  continuev: {
      height:50,
      backgroundColor:'#515db4',
      width:'90%',
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center',
      marginTop:20,
      marginBottom:20,
  },
  continuetxt: {
      color:'white',
      fontSize:15,
  },
  phone: {
      justifyContent:'center',
      alignItems:'center',
  },
  footer: {
    justifyContent:'flex-end',
    alignItems:'center',
    alignContent:'center',
    flex:0.5,
  },
  footerinfo:{
      flexDirection:'row',
  },
  signuptxt: {
      color:'#515db4'
  },
  fhr: {
      height:0.2,
      backgroundColor:'grey',
      marginBottom:20,
      width:'100%',
  }
});
