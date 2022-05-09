import React ,{useEffect , useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
  ImageBackground,
  ScrollView,
  Dimensions,
  PixelRatio,
  SafeAreaView,
  LogBox,
  Appearance
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import flpic1 from "./assets/flpic1.jpg";
import flpic2 from "./assets/flpic2.jpg";
import flpic3 from "./assets/flpic3.jpg";
import flpic4 from "./assets/flpic4.jpg";
import flpic5 from "./assets/flpic5.jpg";
import flpic6 from "./assets/flpic6.jpg";
import flpic7 from "./assets/flpic7.jpg";
import flpic8 from "./assets/flpic8.jpg";
import flpic9 from "./assets/flpic9.jpg";
import flpic15 from "./assets/flpic15.jpg";
import flpic10 from "./assets/flpic10.jpg";
import flpic11 from "./assets/flpic11.jpg";
import flpic12 from "./assets/flpic12.jpg";
import flpic13 from "./assets/flpic13.jpg";
import flpic14 from "./assets/flpic14.jpg";
import tv from "./assets/igtv.png";
import bag from "./assets/bag.png";
import plane from "./assets/plane.png";
import run from "./assets/run.png";
const { width, height } = Dimensions.get("window");
var widthh = PixelRatio.getPixelSizeForLayoutSize(width);
var heightt = PixelRatio.getPixelSizeForLayoutSize(height);
import { Feather } from "@expo/vector-icons";
import darkMode from './styles/darkMode';


export default function Explore() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
      setTheme(scheme.colorScheme)
  })
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])

  firstfl = [
    {
      image: flpic1,
    },
    {
      image: flpic2,
    },
    {
      image: flpic3,
    },
    {
      image: flpic4,
    },
    {
      image: flpic5,
    },
    {
      image: flpic6,
    },
    {
      image: flpic7,
    },
    {
      image: flpic4,
    },
  ];

  secondfl = [
    {
      image: flpic8,
    },
    {
      image: flpic9,
    },
    {
      image: flpic10,
    },
    {
      image: flpic11,
    },
    {
      image: flpic12,
    },
    {
      image: flpic13,
    },
    {
      image: flpic14,
    },
    {
      image: flpic15,
    },
  ];

  typedata = [
    {
      gradient: ["#9d00ff", "#ff0093", "#fff700"],
      image: tv,
      text: "IGTV",
    },
    {
      gradient: ["#3498db", "#3498db", "#3498db"],
      image: bag,
      text: "TIENDA",
    },
    {
      gradient: ["#8e44ad", "#8e44ad", "#8e44ad"],
      image: plane,
      text: "VIEJAS",
    },
    {
      gradient: ["#f368e0", "#f368e0", "#f368e0"],
      image: run,
      text: "FITNESS",
    },
  ];

  const Photoffl = ({ item }) => (
    <TouchableOpacity>
      <Image source={item.image} style={theme == 'light' ? styles.firstflimg : darkMode.ExploreFirstFlImg} />
    </TouchableOpacity>
  );

  const Photosfl = ({ item }) => (
    <TouchableOpacity>
      <Image source={item.image} style={theme == 'light' ? styles.secondflimg : darkMode.ExploreSecondFlImg} />
    </TouchableOpacity>
  );

  const typefl = ({ item }) => (
    <TouchableOpacity style={theme == 'light' ? styles.typebutton : darkMode.ExploreTypeButton}>
      <LinearGradient colors={item.gradient} style={theme == 'light' ? styles.backgroundbg : darkMode.ExploreBackgroundBg}>
        <Image source={item.image} style={theme == 'light' ? styles.typeflimage : darkMode.ExploreTypeFlImg} />
        <Text style={theme == 'light' ? styles.typetxt : darkMode.ExploreTypetxt}>{item.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  const [buscar, onChangeBuscar] = React.useState(null);
  return (
    <SafeAreaView
    style={theme == 'light' ? styles.container : darkMode.ExploreContainer}>
    <ScrollView
      vertical
      showsVerticalScrollIndicator={false}
      style={theme == 'light' ? styles.scrollview : darkMode.ExploreScrollView}
    >
      

      <StatusBar />
        <View style={theme == 'light' ? styles.header : darkMode.ExploreHeader}>
          <TouchableOpacity>
          <Feather name="plus-circle" size={30} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.circle : darkMode.ExploreCircle}/>
          </TouchableOpacity>
          <Text style={theme == 'light' ? styles.headertxt : darkMode.ExploreHeadertxt}>Instagram</Text>
          <TouchableOpacity>
          <Feather name="message-circle" size={30} color={theme == 'light' ? 'black' : 'white'} style={theme == 'light' ? styles.messageicon : darkMode.ExploreMessageIcon}/>
          </TouchableOpacity>
        </View>
        <View style={theme == 'light' ? styles.typev : darkMode.ExploreTypeV}>
          <FlatList
            data={typedata}
            horizontal
            style={theme == 'light' ? styles.typefl : darkMode.ExploreTypeFl}
            renderItem={typefl}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={theme == 'light' ? styles.inputv : darkMode.ExploreInputV}>
          <Feather name="search" color={"grey"} size={20} style={theme == 'light' ? styles.searchicon : darkMode.ExploreSearchIcon}/>
          <TextInput
            placeholder="Buscar"
            style={theme == 'light' ? styles.input : darkMode.ExploreInput}
            value={buscar}
            onChangeText={onChangeBuscar}
          />
         <Feather name="instagram" color={"grey"} size={23} style={theme == 'light' ? styles.instagramicon : darkMode.ExploreInstagramIcon}/>
        </View>
        <View style={theme == 'light' ? styles.images : darkMode.ExploreImages}>
          <View style={theme == 'light' ? styles.firstflcont : darkMode.ExploreFirstFlCont}>
            <Text style={theme == 'light' ? styles.populares : darkMode.ExplorePopulares}>Populares</Text>
            <FlatList
              scrollEnabled={false}
              style={theme == 'light' ? styles.firstfl : darkMode.ExploreFirstFl}
              data={firstfl}
              renderItem={Photoffl}
            />
          </View>
          <FlatList
            scrollEnabled={false}
            style={theme == 'light' ? styles.secondfl : darkMode.ExploreSecondFl}
            data={secondfl}
            renderItem={Photosfl}
          />
        </View>
        <View style={{ height: 75 }} />
        
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview: {
    width:'100%'
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf:'center',
    alignItems: "center",
    paddingBottom: 20,
  },
  input: {
    width:200,
  },
  images: {
    flexDirection: "row",
    width: "100%",
  },
  firstflcont: {
    width: "50%",
  },
  secondfl: {
    width: "50%",
  },
  firstflimg: {
    height: 300,
    width: "90%",
    margin: 20,
    borderRadius: 30,
    alignSelf: "center",
  },
  secondflimg: {
    height: 300,
    width: "90%",
    margin: 20,
    borderRadius: 30,
    alignSelf: "center",
  },
  populares: {
    fontSize: 30,
    fontWeight: "600",
    alignSelf: "center",
    paddingVertical: 20,
  },
  storyimg: {
    width: 30,
    height: 30,
  },
  commentimg: {
    width: 27,
    height: 27,
  },
  headertxt: {
    fontSize: 35,
  },
  searchicon: {
    width: 25,
    height: 25,
    tintColor: "grey",
  },
  instaicon: {
    width: 25,
    tintColor: "grey",
    height: 25,
  },
  inputv: {
    backgroundColor: "white",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: 15,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 50,
    marginTop: 15,
    flexDirection: "row",
  },
  typev: {
    width: "100%",
    alignSelf:'flex-start'
  },
  backgroundbg: {
    height: 125,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 30,
  },
  typebutton: {
    width: 125,
    height: 125,
    marginHorizontal: 8,
  },
  typeflimage: {
    width: 66,
    height: 66,
    tintColor: "#fff",
    alignSelf: "center",
    marginBottom: 12,
  },
  typetxt: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
});
