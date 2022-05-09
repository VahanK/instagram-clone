import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,SafeAreaView} from "react-native";
import { Camera } from "expo-camera";
import { Audio } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useIsFocused } from "@react-navigation/native";
import {Feather} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
export default function App(props) {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);

  const [galleryItems, setGalleryItems] = useState([]);

  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setcameraType] = useState(Camera.Constants.Type.back);
  const [cameraFlash, setcameraFlash] = useState(
    Camera.Constants.FlashMode.off
  );

  const [isCameraReady, setIsCameraReady] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermissions(cameraStatus.status == "granted");

      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermissions(audioStatus.status == "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermissions(galleryStatus.status == "granted");

      if (galleryStatus.status == "granted") {
        const userGalleryMedia = await MediaLibrary.getAssetsAsync({
          sortBy: ["creationTime"],
          mediaType: ["video"],
        });
        setGalleryItems(userGalleryMedia.assets);
      }
    })();
  }, []);
  const recordVideo = async () => {
    if (cameraRef) {
      try {
        const options = {
          maxDuration: 60,
          quality: Camera.Constants.VideoQuality["720"],
        };
        const videoRecordPromise = cameraRef.recordAsync(options);
        if (videoRecordPromise) {
          const data = await videoRecordPromise;
          const source = data.uri;
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const stopVideo = async () => {
    if (cameraRef) {
      cameraRef.stopRecording();
    }
  };

  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspectRatio: [16 / 9],
      quality: 1,
    });
  };

  if (!hasCameraPermissions || !hasAudioPermissions || !hasGalleryPermissions) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      {isFocused ? (
        <Camera
          style={styles.camera}
          ref={(ref) => setCameraRef(ref)}
          ration={"16:9"}
          type={cameraType}
          flashMode={cameraFlash}
          onCameraReady={() => setIsCameraReady(true)}
        />
      ) : null}

        <View style={styles.sidebarcontainer}>
            <TouchableOpacity style={styles.sideBarButton}
            onPress={() => setcameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}>
                <Feather name="refresh-ccw" size={24} color={'white'}/>
                <Text style={styles.icontext}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideBarButton}
            onPress={() => setcameraFlash(cameraFlash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off)}>
                <Feather name="zap" size={24} color={'white'}/>
                <Text style={styles.icontext}>Flash</Text>
            </TouchableOpacity>
        </View>

      <View style={styles.bottombarcontainer}>
        <View style={{ flex: 1 }}></View>
        <View style={styles.recordbuttoncontainer}>
          <TouchableOpacity
            disabled={!isCameraReady}
            onLongPress={() => recordVideo()}
            onPressOut={() => stopVideo()}
            style={styles.recordbutton}
          />
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.galleryButton}
            onPress={() => pickFromGallery()}>
            {galleryItems[0] == undefined ? (
              <></>
            ) : (
              <Image
                style={styles.gallerybuttonimage}
                source={{ uri: galleryItems[0].uri }}
              />
            )}
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
  camera: {
    flex: 1,
    backgroundColor: "black",
    aspectRatio: 10 / 16,
  },
  bottombarcontainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },
  recordbuttoncontainer: {
    flex: 1,
    marginHorizontal: 30,
    marginBottom: 125,
  },
  recordbutton: {
    borderWidth: 8,
    borderColor: "#e84118",
    backgroundColor: "#ff4040",
    borderRadius: 100,
    height: 80,
    width: 80,
    alignSelf: "center",
  },
  galleryButton: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: 75,
    height: 75,
  },
  gallerybuttonimage: {
    width: 75,
    height: 75,
  },
  sidebarcontainer: {
      top:60,
      marginHorizontal:20,
      right:0,
      position:'absolute',
  },
  icontext: {
    color:'white',
    fontSize:12,
    marginTop:5,
  },
  sideBarButton: {
    alignItems: 'center',
    marginBottom:25,
  }
});
