import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Appearance
} from "react-native";
import prof1 from "./assets/prof1.jpg";
import prof2 from "./assets/prof2.jpg";
import prof3 from "./assets/prof3.jpg";
import prof4 from "./assets/prof4.jpg";
import prof5 from "./assets/prof5.jpg";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Slideshow from 'react-native-image-slider-show';
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
import darkMode from './styles/darkMode';

export default function Home() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })

  const stories = [
    {
      Image: prof5,
      colors: ["#bdc3c7", "#bdc3c7"],
      styling: theme == 'light' ? styles.mystoryring : darkMode.HomeMyStoryRing,
      plusstyling: theme == 'light' ? styles.plusvisible : darkMode.HomePlusVisible,
      pluscolors: ["#9d00ff", "#ff0093"],
    },
    {
      Username: "Luz.anzo",
      Image: prof1,
      colors: ["#9d00ff", "#ff0093"],
      styling: theme == 'light' ? styles.storyring : darkMode.HomeStoryRing,
      plusstyling: theme == 'light' ? styles.plushidden : darkMode.HomePlusHidden,
      pluscolors: ['transparent', 'transparent'],
    },
    {
      Username: "Alice_002",
      Image: prof2,
      colors: ["#9d00ff", "#ff0093"],
      styling: theme == 'light' ? styles.storyring : darkMode.HomeStoryRing,
      plusstyling: theme == 'light' ? styles.plushidden : darkMode.HomePlusHidden,
      pluscolors: ['transparent', 'transparent'],
    },
    {
      Username: "Perla_Pipol",
      Image: prof3,
      colors: ["#9d00ff", "#ff0093"],
      styling: theme == 'light' ? styles.storyring : darkMode.HomeStoryRing,
      plusstyling: theme == 'light' ? styles.plushidden : darkMode.HomePlusHidden,
      pluscolors: ['transparent', 'transparent'],
    },
    {
      Username: "Caseysmith__03",
      Image: prof4,
      colors: ["#9d00ff", "#ff0093"],
      styling: theme == 'light' ? styles.storyring : darkMode.HomeStoryRing,
      plusstyling: theme == 'light' ? styles.plushidden : darkMode.HomePlusHidden,
      pluscolors: ['transparent', 'transparent'],
    },
  ];


  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };

  const Stories = ({ item }) => (
    <TouchableOpacity>
      <View style={theme == 'light' ? styles.storiescontainer : darkMode.HomeStoriesContainer}>
        <View style={theme == 'light' ? styles.storythumbnail : darkMode.HomeStoryThumbnail}>
          <LinearGradient colors={item.colors} style={item.styling}>
            <Image style={theme == 'light' ? styles.storythumbnailimg : darkMode.HomeStoryThumbnailImg} source={item.Image} />
          </LinearGradient>
          <View style={item.plusstyling}>
            <LinearGradient colors={item.pluscolors} style={theme == 'light' ? styles.buttonpls : darkMode.HomeButtonPls}>
              <Text style={theme == 'light' ? styles.plustxt : darkMode.HomePlustxt}>+</Text>
            </LinearGradient>
          </View>
          <Text style={theme == 'light' ? styles.usernametxt : darkMode.HomeUsernametxt}>{item.Username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={theme == 'light' ? styles.container : darkMode.HomeContainer}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <View style={theme == 'light' ? styles.header : darkMode.HomeHeader}>
          <TouchableOpacity>
            <Feather name="plus-circle" size={30} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.circleicon : darkMode.HomeCircleIcon}/>
          </TouchableOpacity>
          <Text style={theme == 'light' ? styles.headertxt : darkMode.HomeHeadertxt}>Instagram</Text>
          <TouchableOpacity>
            <Feather name="message-circle" size={30} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.messageicon : darkMode.HomeMessageIcon}/>
          </TouchableOpacity>
        </View>

        <View style={theme == 'light' ? styles.storyflcontainer : darkMode.HomeStoryFLContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={stories}
            renderItem={Stories}
          />
        </View>
        <View style={theme == 'light' ? styles.search : darkMode.HomeSearch}>
          <Text style={theme == 'light' ? styles.searchtxt : darkMode.HomeSearchtxt}>Explorar</Text>
          <View style={theme == 'light' ? styles.inputfeild : darkMode.HomeInputFeild}>
            <Feather name="search" size={20} color={"gray"} style={theme == 'light' ? styles.searchicon : darkMode.HomeSearchIcon} />
            <TextInput style={theme == 'light' ? styles.searchinput : darkMode.HomeSearchInput} />
          </View>

        </View>

        <View style={theme == 'light' ? styles.post : darkMode.HomePost}>
          <View style={theme == 'light' ? styles.postheader : darkMode.HomePostHeader}>
            <TouchableOpacity>
              <Image source={prof5} style={theme == 'light' ? styles.postprof : darkMode.HomePostProf} />
            </TouchableOpacity>
            <View style={theme == 'light' ? styles.headerinfo : darkMode.HomeHeaderInfo}>
              <Text style={theme == 'light' ? styles.usernamepost : darkMode.HomeUsernamePost}>Mauricio_lopez</Text>
              <Text style={theme == 'light' ? styles.posttime : darkMode.HomePostTime}>2 hours</Text>
            </View>
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View style={theme == 'light' ? styles.postheaderimg : darkMode.HomePostHeaderImg}>
              <TouchableOpacity style={theme == 'light' ? styles.sendiconto : darkMode.HomeSendIconTo}>
                <Feather name="send" size={17} color={"grey"} style={theme == 'light' ? styles.sendicon : darkMode.HomeSendIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="align-justify" size={25} color={"grey"} style={theme == 'light' ? styles.justifybutton : darkMode.HomeJustifyIcon}/>
              </TouchableOpacity>
            </View>
          </View>
          <Slideshow
            height={300}
            arrowSize={0}
            indicatorColor={"black"}
            dataSource={[
              { url: 'https://images.pexels.com/photos/10068149/pexels-photo-10068149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', },
              { url: 'https://images.pexels.com/photos/9699293/pexels-photo-9699293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', },
              { url: 'https://images.pexels.com/photos/5113043/pexels-photo-5113043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', }
            ]} />
          <View style={theme == 'light' ? styles.footer : darkMode.HomeFooter}>
            <Text style={theme == 'light' ? styles.likeinfo : darkMode.HomeLikeInfo}>
              Les gusta a danieldelax y 4,88 personas mas
            </Text>

            <Text style={theme == 'light' ? styles.posttitlev : darkMode.HomePostTitleV}>
              <Text style={theme == 'light' ? styles.posttitle : darkMode.HomePostTitle}>SACRIFICE | VIRUS </Text>
              <Text style={theme == 'light' ? styles.titletxt : darkMode.HomeTitletxt}>
                This photomanipulation inspired in the virus
              </Text>
            </Text>

            <Text style={theme == 'light' ? styles.commentnumber : darkMode.HomeCommentNumber}>Ver los 500 comentarios</Text>
            <Text style={theme == 'light' ? styles.commentinfo : darkMode.HomeCommentInfo}>
              <Text style={theme == 'light' ? styles.commentusername : darkMode.HomeCommentUsername}>jhonny_fernandez </Text>
              <Text style={theme == 'light' ? styles.commentcontent : darkMode.HomeCommentContent}>
                Esta edicion esta super genial , que pro!!
              </Text>
            </Text>
          </View>
        </View>



        <View style={theme == 'light' ? styles.post : darkMode.HomePost}>
          <View style={theme == 'light' ? styles.postheader : darkMode.HomePostHeader}>
            <TouchableOpacity>
              <Image source={prof5} style={theme == 'light' ? styles.postprof : darkMode.HomePostProf} />
            </TouchableOpacity>
            <View style={theme == 'light' ? styles.headerinfo : darkMode.HomeHeaderInfo}>
              <Text style={theme == 'light' ? styles.usernamepost : darkMode.HomeUsernamePost}>Mauricio_lopez</Text>
              <Text style={theme == 'light' ? styles.posttime : darkMode.HomePostTime}>2 hours</Text>
            </View>
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View />
            <View style={theme == 'light' ? styles.postheaderimg : darkMode.HomePostHeaderImg}>
              <TouchableOpacity style={theme == 'light' ? styles.sendiconto : darkMode.HomeSendIconTo}>
                <Feather name="send" size={17} color={"grey"} style={theme == 'light' ? styles.sendicon : darkMode.HomeSendIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="align-justify" size={25} color={"grey"} style={theme == 'light' ? styles.justifybutton : darkMode.HomeJustifyIcon}/>
              </TouchableOpacity>
            </View>
          </View>
          <Image source={prof2} style={styles.postimg} />
          <View style={theme == 'light' ? styles.footer : darkMode.HomeFooter}>
            <Text style={theme == 'light' ? styles.likeinfo : darkMode.HomeLikeInfo}>
              Les gusta a danieldelax y 4,88 personas mas
            </Text>

            <Text style={theme == 'light' ? styles.posttitlev : darkMode.HomePostTitleV}>
              <Text style={theme == 'light' ? styles.posttitle : darkMode.HomePostTitle}>SACRIFICE | VIRUS </Text>
              <Text style={theme == 'light' ? styles.titletxt : darkMode.HomeTitletxt}>
                This photomanipulation inspired in the virus
              </Text>
            </Text>

            <Text style={theme == 'light' ? styles.commentnumber : darkMode.HomeCommentNumber}>Ver los 500 comentarios</Text>
            <Text style={theme == 'light' ? styles.commentinfo : darkMode.HomeCommentInfo}>
              <Text style={theme == 'light' ? styles.commentusername : darkMode.HomeCommentUsername}>jhonny_fernandez </Text>
              <Text style={theme == 'light' ? styles.commentcontent : darkMode.HomeCommentContent}>
                Esta edicion esta super genial , que pro!!
              </Text>
            </Text>
          </View>
        </View>



      



        <View style={{ height: 75 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2f2",
  },
  storyimg: {
    height: 30,
    width: 30,
  },
  commentimg: {
    width: 25,
    height: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "4%",
  },
  headertxt: {
    fontSize: 30,
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
  plushidden: {
    display: 'none'
  },
  plusvisible: {
    position: 'absolute',
    bottom: 25,
    overflow: 'visible',
  },
  buttonpls: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  plustxt: {
    color: 'white',
    fontWeight: '700',
  },
  usernametxt: {
    fontSize: 10,
    fontWeight: "500",
    marginVertical: 10,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: "4%",
    alignItems: "center",
    marginVertical: 20,
  },
  searchinput: {
    width: '100%',
    height: 35,
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: "5%",
  },
  searchtxt: {
    fontSize: 30,
    fontWeight: "500",
  },
  searchicon: {
    marginLeft:20,
  },
  sendimg: {
    width: 20,
    height: 20,
    tintColor: "#7f8c8d",
    marginRight: 5,
  },
  postprof: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  dotsimg: {
    height: 20,
    width: 20,
    tintColor: "#7f8c8d",
  },
  postheader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "4%",
    paddingBottom: 20,
  },
  postheaderimg: {
    flexDirection: "row",
  },
  usernamepost: {
    fontSize: 20,
    fontWeight: "600",
  },
  posttime: {
    color: "#95a5a6",
  },
  post: {
    backgroundColor: "white",
    marginHorizontal: "4%",
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  footer: {
    marginHorizontal: "5%",
    paddingTop: 7,
  },
  likeinfo: {
    fontSize: 13,
  },
  posttitlev: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  posttitle: {
    fontWeight: "600",
  },
  titletxt: {
    fontSize: 13,
    justifyContent: "center",
  },
  commentnumber: {
    color: "#95a5a6",
    fontSize: 13,
    paddingVertical: 5,
  },
  commentusername: {
    fontWeight: "600",
  },
  slideContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)",
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)",
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)",
  },
  inputfeild: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    paddingLeft: 20,
  },
  postimg: {
    height: 300,
    width: '100%',
  },
  sendicon : {
    marginRight:5
  },
  sendiconto : {
    justifyContent:'center',
  }
});
