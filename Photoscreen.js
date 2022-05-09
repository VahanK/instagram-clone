import React ,{useEffect,useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  PixelRatio,
  LogBox,
  Appearance,
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
import darkMode from './styles/darkMode';

export default function PhotoScreen() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme)
  })
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['VirtualizedLists: missing keys for items']);
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
      <Image source={item.image} style={theme == 'light' ? styles.firstflimg : darkMode.PhotoScreenFirstFlImg} />
    </TouchableOpacity>
  );

  const Photosfl = ({ item }) => (
    <TouchableOpacity>
      <Image source={item.image} style={theme == 'light' ? styles.secondflimg : darkMode.PhotoScreenSecondFlImg} />
    </TouchableOpacity>
  );

  const typefl = ({ item }) => (
    <TouchableOpacity style={theme == 'light' ? styles.typebutton : darkMode.PhotoScreenTypeButton}>
      <LinearGradient colors={item.gradient} style={theme == 'light' ? styles.backgroundbg : darkMode.PhotoScreenBackgroundBg}>
        <Image source={item.image} style={theme == 'light' ? styles.typeflimage : darkMode.PhotoScreenTYpeFlImage} />
        <Text style={theme == 'light' ? styles.typetxt : darkMode.PhotoScreenTypetxt}>{item.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  const [buscar, onChangeBuscar] = React.useState(null);
  return (
    
    <View style={theme == 'light' ? styles.container : darkMode.PhotoScreenContainer}>
        <View style={theme == 'light' ? styles.images : darkMode.PhotoScreenImages}>
          <View style={theme == 'light' ? styles.firstflcont : darkMode.PhotoScreenFirstFlCont}>
            <FlatList
              scrollEnabled={false}
              style={theme == 'light' ? styles.firstfl : darkMode.PhotoScreenFirstFl}
              data={firstfl}
              renderItem={Photoffl}
            />
          </View>
          <FlatList
            scrollEnabled={false}
            style={theme == 'light' ? styles.secondfl : darkMode.PhotoScreenSecondFl}
            data={secondfl}
            renderItem={Photosfl}
          />
        </View>
        <View style={{ height: 75 ,backgroundColor: theme == 'light' ? 'white' : 'black' }} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
