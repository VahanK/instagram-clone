import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  Dimensions,
  TextInput,
  StatusBar,
  Appearance
} from "react-native";
import TopTabs from "./TopTabs";
import prof5 from "./assets/prof5.jpg";
import prof4 from "./assets/prof4.jpg";
import prof3 from "./assets/prof3.jpg";
import prof2 from "./assets/prof2.jpg";
import prof1 from "./assets/prof1.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import darkMode from './styles/darkMode';

export default function Profile(props) {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })
  const stories = [
    {
      Image: prof5,
      colors: ["#bdc3c7", "#bdc3c7"],
      styling: theme == 'light' ? styles.mystoryring : darkMode.ProfileMyStoryRing,
      plusstyling:theme == 'light' ? styles.plusvisible : darkMode.ProfilePlusStyling,
      pluscolors: ["#9d00ff", "#ff0093"],
    },
    {
      Username: "Luz.anzo",
      Image: prof1,
      colors: ["#9d00ff", "#ff0093"],
      styling: theme == 'light' ? styles.storyring : darkMode.ProfileStoryRing,
      plusstyling:theme == 'light' ? styles.plushidden : darkMode.ProfilePlusHidden,
      pluscolors: ['transparent', 'transparent'],
    },
    {
      Username: "Alice_002",
      Image: prof2,
      colors: ["#9d00ff", "#ff0093"],
      styling: theme == 'light' ? styles.storyring : darkMode.ProfileStoryRing,
      plusstyling:theme == 'light' ? styles.plushidden : darkMode.ProfilePlusHidden,
      pluscolors: ['transparent', 'transparent'],
    },
    {
      Username: "Perla_Pipol",
      Image: prof3,
      colors: ["#9d00ff", "#ff0093"],
      styling: theme == 'light' ? styles.storyring : darkMode.ProfileStoryRing,
      plusstyling:theme == 'light' ? styles.plushidden : darkMode.ProfilePlusHidden,
      pluscolors: ['transparent', 'transparent'],
    },
    {
      Username: "Caseysmith__03",
      Image: prof4,
      colors: ["#9d00ff", "#ff0093"],
      styling: theme == 'light' ? styles.storyring : darkMode.ProfileStoryRing,
      plusstyling:theme == 'light' ? styles.plushidden : darkMode.ProfilePlusHidden,
      pluscolors: ['transparent', 'transparent'],
    },
  ];

  const Stories = ({ item }) => (
    <TouchableOpacity>
      <View style={theme == 'light' ? styles.storiescontainer : darkMode.ProfileStoriesContainer}>
        <View style={theme == 'light' ? styles.storythumbnail : darkMode.ProfileStoryThumbnail}>
          <LinearGradient colors={item.colors} style={item.styling}>
            <Image style={theme == 'light' ? styles.storythumbnailimg : darkMode.ProfileStoryThumbnailImg} source={item.Image} />
          </LinearGradient>
          <View style={item.plusstyling}>
              <LinearGradient colors={item.pluscolors} style={theme == 'light' ? styles.buttonpls : darkMode.ProfileButtonPls}>
               <Text style={theme == 'light' ? styles.plustxt : darkMode.ProfilePlustxt}>+</Text>
              </LinearGradient>
            </View>
          <Text style={theme == 'light' ? styles.usernametxt : darkMode.ProfileUsernametxt}>{item.Username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={theme == 'light' ? styles.cont : darkMode.ProfileCont}>
      <StatusBar barStyle="dark-content" />
      <View style={theme == 'light' ? styles.container : darkMode.ProfileContainer}>
        <ScrollView style={{ flex: 1 ,overflow:'scroll',height:'100%'}} nestedScrollEnabled = {true} showsVerticalScrollIndicator={false}>
          <View style={theme == 'light' ? styles.header : darkMode.ProfileHeader}>
            <View style={theme == 'light' ? styles.top : darkMode.ProfileTop}>
              <TouchableOpacity>
              <Feather name="plus-circle" size={30} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.addicon : darkMode.ProfileAddIcon}/>
              </TouchableOpacity>
              <Image source={prof5} style={theme == 'light' ? styles.profileimg : darkMode.ProfileProfileImg} />
              <TouchableOpacity onPress={() => { props.navigation.navigate('DmUser') }}>
              <Feather name="message-circle" size={30} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.messageicon : darkMode.ProfileMessageIcon} />
              </TouchableOpacity>
            </View>
            <Text style={theme == 'light' ? styles.profilename : darkMode.ProfileProfileName}>Mauricio Lopez</Text>
            <Text style={theme == 'light' ? styles.bio : darkMode.ProfileBio}>
              Diseño ui/ux y Fotografia 📷 Zihuatanejo, Mexico
            </Text>
            <View style={theme == 'light' ? styles.biohash : darkMode.ProfileBioHash}>
              <TouchableOpacity>
                <Text style={theme == 'light' ? styles.hash : darkMode.ProfileHash}>#LifeStyle </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={theme == 'light' ? styles.hash : darkMode.ProfileHash}>#Design </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={theme == 'light' ? styles.hash : darkMode.ProfileHash}>#Photography </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={theme == 'light' ? styles.hash : darkMode.ProfileHash}>#Urban </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={theme == 'light' ? styles.hash : darkMode.ProfileHash}>#Art</Text>
              </TouchableOpacity>
            </View>
            <View style={theme == 'light' ? styles.accnum : darkMode.ProfileAccNum}>
              <View style={theme == 'light' ? styles.post : darkMode.ProfilePost}>
                <Text style={theme == 'light' ? styles.postnum : darkMode.ProfilePostNum}>735</Text>
                <Text style={theme == 'light' ? styles.posttxt: darkMode.ProfilePosttxt}>Post</Text>
              </View>
              <View style={theme == 'light' ? styles.post : darkMode.ProfilePost}>
                <Text style={theme == 'light' ? styles.postnum : darkMode.ProfilePostNum}>876</Text>
                <Text style={theme == 'light' ? styles.posttxt : darkMode.ProfilePosttxt}>Seguirodes</Text>
              </View>
              <View style={theme == 'light' ? styles.post : darkMode.ProfilePost}>
                <Text style={theme == 'light' ? styles.postnum : darkMode.ProfilePostNum}>568</Text>
                <Text style={theme == 'light' ? styles.posttxt : darkMode.ProfilePosttxt}>Seguidos</Text>
              </View>
            </View>
            <TouchableOpacity style={theme == 'light' ? styles.followbtn : darkMode.ProfileFollowBtn}>
              <LinearGradient
                colors={["#9d00ff", "#ff0093"]}
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={theme == 'light' ? styles.followtxt : darkMode.ProfileFollowtxt}>Seguir</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <ScrollView style={{flex:1,height:'100%'}}>
          <View style={theme == 'light' ? styles.storyflcontainer : darkMode.ProfileStoryFlContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={stories}
              renderItem={Stories}
            />
          </View>
      
          <View style={theme == 'light' ? styles.TopTabView : darkMode.ProfileTopTabView}>
          <TopTabs />
          </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  TopTabView : {
    height:2850, overflow:'scroll',
  },
  container: {
    flex: 1,
  },
  cont: {
    flex: 1,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "4%",
    paddingVertical: 20,
  },
  header: {
    backgroundColor: "white",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  storyimg: {
    width: 30,
    height: 30,
  },
  commentimg: {
    width: 30,
    height: 30,
  },
  profileimg: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  profilename: {
    fontSize: 33,
    textAlign: "center",
    fontWeight: "600",
  },
  bio: {
    textAlign: "center",
    padding: 5,
    paddingBottom: 0,
  },
  biohash: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hash: {
    color: "blue",
    fontWeight: "300",
    fontSize: 13,
  },
  accnum: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
  },
  post: {
    justifyContent: "center",
    alignItems: "center",
  },
  postnum: {
    fontSize: 25,
    fontWeight: "600",
  },
  posttxt: {
    color: "#636e72",
  },
  followbtn: {
    width: 100,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  followtxt: {
    color: "white",
    fontWeight: "600",
  },
  storyimg: {
    height: 35,
    width: 35,
  },
  storyring: {
    borderRadius: 43,
    justifyContent: "center",
    alignItems: "center",
    height: 88,
    width: 88,
    marginHorizontal: 10,
    marginTop: 10,
  },
  mystoryring: {
    borderRadius: 43,
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    width: 90,
    marginHorizontal: 10,
    marginTop: 10,
  },
  storythumbnailimg: {
    height: 85,
    width: 85,
    borderRadius: 55,
    },
  storythumbnail: {
    justifyContent: "center",
    alignItems: "center",
  },
  usernametxt: {
    fontSize: 10,
    fontWeight: "500",
    marginVertical: 10,
  },
  plushidden:{
    display: 'none'
  },
  plusvisible: {
    position:'absolute',
    bottom:25,
    overflow:'visible',
  }, 
  buttonpls: {
    width:20,
    height:20,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'white',
    borderWidth:2,
  },
  plustxt: {
    color:'white',
    fontWeight:'700',
  },
});
