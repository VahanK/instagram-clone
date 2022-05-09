import React from 'react';
import { StyleSheet , Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const darkMode = StyleSheet.create({

  //Intro Screen 

  IntroContainer: {
    flex: 1,
    backgroundColor:'black'
},
IntroTitle: {
    flex: 0.4,
    justifyContent: 'flex-end',
},
IntroTitletxt: {
    fontSize: 40,
    textAlign: 'center',
    color:'white'
},
IntroBtns: {
    alignItems: 'center',
    justifyContent: 'flex-end',
},
IntroBtn: {
    backgroundColor: '#515bd4',
    width: '70%',
    height: '20%',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
},
IntroBtntxt: {
    fontSize: 15,
    color: 'white',
},

// Login Screen

LoginContainer: {
  flex: 1,
  backgroundColor:'black'
},
LoginTitle: {
  flex: 0.4,
  justifyContent: "flex-end",
},
LoginTitletxt: {
  fontSize: 40,
  textAlign: "center",
  color:'white'
},
LoginBtn: {
  backgroundColor: "#515bd4",
  width: "90%",
  height: "15%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
},
LoginBtntxt: {
  fontSize: 15,
  color: "white",
},
LoginHr: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
},
LoginLeftHr: {
  width: "40%",
  backgroundColor: "grey",
  height: 0.5,
},
LoginRightHr: {
  width: "40%",
  backgroundColor: "grey",
  height: 0.5,
},
LoginOr: {
  paddingHorizontal: 10,
  fontSize: 15,
  color: "grey",
  fontWeight: "600",
},
LoginFbImg: {
  width: 25,
  height: 25,
},
LoginInput: {
  backgroundColor: "#dfe4ea",
  width: "90%",
  height: "15%",
  paddingLeft: "5%",
  borderRadius: 5,
},
LoginInputPass: {
  backgroundColor: "#dfe4ea",
  width: "90%",
  height: "15%",
  paddingLeft: "5%",
  borderRadius: 5,
},
LoginInputs: {
  justifyContent: "center",
  alignItems: "center",
},
LoginForgotPass: {
  width: "90%",
  justifyContent: "center",
  alignItems: "flex-end",
  paddingTop: 10,
  paddingBottom: 20,
},
LoginForgottxt: {
  color: '#515bd4'
},
LoginFb: {
  flexDirection: "row",
  alignItems: 'center',
  padding: '10%',
},
LoginFbtxt: {
  color: '#515bd4',
  fontSize: 15,
  fontWeight: '500',
},
LoginFbv: {
  justifyContent: 'center',
  alignItems: 'center',
},
LoginFooter: {
  justifyContent: 'flex-end',
  alignItems: 'center',
  alignContent: 'center',
  flex: 0.5,
},
LoginFooterInfo: {
  flexDirection: 'row',
},
LoginSignuptxt: {
  color: '#515db4'
},
LoginFhr: {
  height: 0.2,
  backgroundColor: 'grey',
  marginBottom: 20,
  width: '100%',
},
LoginFootertxt : {
  color:'white'
},
LoginSignUptxt: {
  color:'#515db4'
},

// SignUp Screen


SignUpContainer: {
  flex: 1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'black'
},
SignUpTitle: {
  flex: 0.4,
  justifyContent: "flex-end",
  width:'70%',
},
SignUpTitletxt: {
  fontSize: 40,
  textAlign: "center",
  color:'white'
},
SignUpHr: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
},
SignUpLeftHr: {
  width: "40%",
  backgroundColor: "grey",
  height: 0.5,
},
SignUpRightHr: {
  width: "40%",
  backgroundColor: "grey",
  height: 0.5,
},
SignUpOr: {
  paddingHorizontal: 10,
  fontSize: 15,
  color: "grey",
  fontWeight: "600",
},
SignUpFbImg: {
  width: 35,
  height: 25,
},
SignUpFb: {
  flexDirection: "row",
  alignItems:'center',
  padding:'10%',
},
SignUpFbv: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#515db4',
    width:'90%',
    height:'15%',
    borderRadius:20,
},
SignUpTitleInfo: {
    textAlign:'center',
    color:'grey',
    marginVertical:10,
},
SignUpFbtxt: {
    color:'#515bd4',
    fontSize:12,
    fontWeight:'500',
} ,
SignUpContinueV: {
    height:50,
    backgroundColor:'#515db4',
    width:'90%',
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginBottom:20,
},
SignUpContinuetxt: {
    color:'white',
    fontSize:15,
},
SignUpPhone: {
    justifyContent:'center',
    alignItems:'center',
},
SignUpFooter: {
  justifyContent:'flex-end',
  alignItems:'center',
  alignContent:'center',
  flex:0.5,
},
SignUpFooterInfo:{
    flexDirection:'row',
},
SignUpSignUptxt: {
    color:'#515db4'
},
SignUpFootertxt: {
  color:'white'
}
,
SignUpFhr: {
    height:0.2,
    backgroundColor:'grey',
    marginBottom:20,
    width:'100%',
},


//Sign Up Form Screen 

SignUpFormContainer: {
  flex: 1,
  backgroundColor:'black'
},
SignUpFormHr: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
},
SignUpFormLeftHr: {
  width: "40%",
  backgroundColor: "grey",
  height: 0.5,
},
SignUpFormRightHr: {
  width: "40%",
  backgroundColor: "grey",
  height: 0.5,
},
SignUpFormOr: {
  paddingHorizontal: 10,
  fontSize: 15,
  color: "grey",
  fontWeight: "600",
},
SignUpFormFooter: {
  justifyContent: 'flex-end',
  alignItems: 'center',
  alignContent: 'center',
  flex: 0.5,
  paddingBottom:20,
},
SignUpFormFooterInfo: {
  flexDirection: 'row',
},
SignUpFormSignUptxt: {
  color: '#515db4'
},
SignUpFormFootertxt: {
color:'white'
},
SignUpFormFhr: {
  height: 0.2,
  backgroundColor: 'grey',
  marginBottom: 20,
  width: '100%',
},
SignUpFormFb: {
  flexDirection: "row",
  alignItems: 'center',
  borderColor: '#dfe4ea',
  borderRadius: 5,
  borderWidth: 2,
  height: 45,
  paddingHorizontal: 50,
  marginTop:20,
},
SignUpFormFbtxt: {
  color: 'black',
  fontSize: 15,
  fontWeight: '500',
  paddingHorizontal: 20,
  color:'white'
},
SignUpFormFbv: {
  justifyContent: 'center',
  alignItems: 'center',
},
SignUpFormTabs: {
  width: '80%',
},
SignUpFormInputPhone: {
  backgroundColor: "#dfe4ea",
  paddingLeft: "5%",
  borderRadius: 5,
  height: 45,
},
SignUpFormBtn: {
  backgroundColor: "#515bd4",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  height: 45,
},
SignUpFormNexttxt: {
  color: 'white',
},
SignUpFormInfotxt: {
  color: 'grey',
  textAlign: 'center',
  marginVertical: 10,
},
SignUpFormTitle: {
  fontSize: 25,
  color:'white',
},
SignUpFormHeader: {
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop:35,
  paddingBottom:10,
},
SignUpFormArrow: {
  position: 'absolute',
  left: 10,
  top: 18,
},

// Phone Screen 

PhoneScreenContainer: {
  alignItems: "center",
  justifyContent: "center",
  paddingTop:20,
  height:300,
  backgroundColor:'black'
},
PhoneScreenInput: {
  marginTop:-80,
  width:'90%',
  backgroundColor:'#a5b1c2',
  paddingLeft:'5%',
  height:45,
  borderRadius:10,
},
PhoneScreenTouchable : {
  backgroundColor:'#3867d6',
  width:'90%',
  alignItems:'center',
  justifyContent:'center',
  padding:10,
  borderRadius:10,
  marginTop:20,
},
PhoneScreenButtontxt: {
  color:'white',
  fontSize:20,
  fontWeight:'400'
},
PhoneScreentxt: {
  textAlign:'center',
  width:'90%',
  color:'grey',
  paddingTop:20,
},


// Email Screen 

EmailScreenContainer: {
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 20,
  height: 300,
  backgroundColor:'black'
},
EmailScreenInput: {
  marginTop: -80,
  width: '90%',
  backgroundColor: '#a5b1c2',
  paddingLeft: '5%',
  height: 45,
  borderRadius: 10,
},
EmailScreenTouchable: {
  backgroundColor: '#3867d6',
  width: '90%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  borderRadius: 10,
  marginTop: 20,
},
EmailScreenButtontxt: {
  color: 'white',
  fontSize: 20,
  fontWeight: '400'
},
EmailScreentxt: {
  textAlign: 'center',
  width: '90%',
  color: 'grey',
  paddingTop: 20,
},



// Home Screen 

HomeContainer: {
  flex: 1,
  backgroundColor: "black",
},
HomeStoryImg: {
  height: 30,
  width: 30,
},
HomeCommentImg: {
  width: 25,
  height: 25,
},
HomeHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginHorizontal: "4%",
},
HomeHeadertxt: {
  fontSize: 30,
  color:'white'
},
HomeStoryImg: {
  height: 35,
  width: 35,
},
HomeStoryRing: {
  borderRadius: 43,
  justifyContent: "center",
  alignItems: "center",
  height: 88,
  width: 88,
  marginHorizontal: 10,
  marginTop: 10,
},
HomeMyStoryRing: {
  borderRadius: 43,
  justifyContent: "center",
  alignItems: "center",
  height: 90,
  width: 90,
  marginHorizontal: 10,
  marginTop: 10,
},
HomeStoryThumbnailImg: {
  height: 85,
  width: 85,
  borderRadius: 55,
},
HomeStoryThumbnail: {
  justifyContent: "center",
  alignItems: "center",
},
HomeUsernametxt: {
  fontSize: 10,
  fontWeight: "500",
  marginVertical: 10,
},
HomePlusHidden: {
  display: 'none'
},
HomePlusVisible: {
  position: 'absolute',
  bottom: 25,
  overflow: 'visible',
},
HomeButtonPls: {
  width: 20,
  height: 20,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'white',
  borderWidth: 2,
},
HomePlustxt: {
  color: 'white',
  fontWeight: '700',
},
HomeUsernametxt: {
  fontSize: 10,
  fontWeight: "500",
  marginVertical: 10,
  color:'white'
},
HomeSearch: {
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginHorizontal: "4%",
  alignItems: "center",
  marginVertical: 20,
},
HomeSearchInput: {
  width: '100%',
  height: 35,
  backgroundColor: "white",
  borderRadius: 20,
  paddingLeft: "5%",
},
HomeSearchtxt: {
  fontSize: 30,
  fontWeight: "500",
  color:'white'
},
HomeSearchIcon: {
  marginLeft:20,
},
HomeSendImg: {
  width: 20,
  height: 20,
  tintColor: "#7f8c8d",
  marginRight: 5,
},
HomePostProf: {
  width: 50,
  height: 50,
  borderRadius: 50,
},
HomeDotsImg: {
  height: 20,
  width: 20,
  tintColor: "#7f8c8d",
},
HomePostHeader: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginHorizontal: "4%",
  paddingBottom: 20,
},
HomePostHeaderImg: {
  flexDirection: "row",
},
HomeUsernamePost: {
  fontSize: 20,
  fontWeight: "600",
  color:'white'
},
HomePostTime: {
  color: "#95a5a6",
},
HomePost: {
  backgroundColor: "#2d3436",
  marginHorizontal: "4%",
  padding: 10,
  borderRadius: 20,
  marginVertical: 10,
},
HomeFooter: {
  marginHorizontal: "5%",
  paddingTop: 7,
},
HomeLikeInfo: {
  fontSize: 13,
  color:'white'
},
HomePostTitlev: {
  flexDirection: "row",
  paddingVertical: 5,
},
HomePostTitle: {
  fontWeight: "600",
  color:'white'
},
HomeTitletxt: {
  fontSize: 13,
  justifyContent: "center",
  color:'white'
},
HomeCommentNumber: {
  color: "#95a5a6",
  fontSize: 13,
  paddingVertical: 5,
},
HomeCommentContent: {
  color:'white'
}
,
HomeCommentUsername: {
  fontWeight: "600",
  color:'white'
},
HomeSlideContainer: {
  alignItems: "center",
  justifyContent: "center",
},
HomeSlide1: {
  backgroundColor: "rgba(20,20,200,0.3)",
},
HomeSlide2: {
  backgroundColor: "rgba(20,200,20,0.3)",
},
HomeSlide3: {
  backgroundColor: "rgba(200,20,20,0.3)",
},
HomeInputFeild: {
  flexDirection: 'row',
  backgroundColor: 'white',
  borderRadius: 15,
  alignItems: 'center',
  justifyContent: 'center',
  width: 200,
  paddingLeft: 20,
},
HomePostImg: {
  height: 300,
  width: '100%',
},
HomeSendIcon : {
  marginRight:5
},
HomeSendIconTo : {
  justifyContent:'center',
},


// Explore Screen 

ExploreContainer: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:'black'
},
ExploreScrollView: {
  width:'100%'
},
ExploreHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "90%",
  alignSelf:'center',
  alignItems: "center",
  paddingBottom: 20,
},
ExploreInput: {
  width:200,
},
ExploreImages: {
  flexDirection: "row",
  width: "100%",
},
ExploreFirstFlCont: {
  width: "50%",
},
ExploreSecondFl: {
  width: "50%",
},
ExploreFirstFlImg: {
  height: 300,
  width: "90%",
  margin: 20,
  borderRadius: 30,
  alignSelf: "center",
},
ExploreSecondFlImg: {
  height: 300,
  width: "90%",
  margin: 20,
  borderRadius: 30,
  alignSelf: "center",
},
ExplorePopulares: {
  fontSize: 30,
  fontWeight: "600",
  alignSelf: "center",
  paddingVertical: 20,
  color:'white'
},
ExploreStoryImg: {
  width: 30,
  height: 30,
},
ExploreCommentImg: {
  width: 27,
  height: 27,
},
ExploreHeadertxt: {
  fontSize: 35,
  color:'white'
},
ExploreSearchIcon: {
  width: 25,
  height: 25,
  tintColor: "grey",
},
ExploreInstaIcon: {
  width: 25,
  tintColor: "grey",
  height: 25,
},
ExploreInputV: {
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
ExploreTypeV: {
  width: "100%",
  alignSelf:'flex-start'
},
ExploreBackgroundBg: {
  height: 125,
  justifyContent: "center",
  alignContent: "center",
  borderRadius: 30,
},
ExploreTypeButton: {
  width: 125,
  height: 125,
  marginHorizontal: 8,
},
ExploreTypeFlImg: {
  width: 66,
  height: 66,
  tintColor: "#fff",
  alignSelf: "center",
  marginBottom: 12,
},
ExploreTypetxt: {
  color: "white",
  fontWeight: "700",
  textAlign: "center",
},

// Activity Screen

ActivityContainer: {
  flex: 1,
  backgroundColor:'black'
},
ActivityHeader: {
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginHorizontal: '-10%',
},
ActivityInsta: {
  fontSize: 30,
  fontWeight: "400",
  color:'white'
},
ActivityMain: {
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  paddingVertical: windowHeight / 3
},
ActivityNotif: {
  fontSize: 20,
  fontWeight: "600",
  textAlignVertical: "center",
  color:'white'
},

// Profile Screen

ProfileTopTabView : {
  height:2850, overflow:'scroll'
},
ProfileContainer: {
  flex: 1,
  backgroundColor: "black",
},
ProfileCont: {
  flex: 1,
  backgroundColor: "black",
},
ProfileTop: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginHorizontal: "4%",
  paddingVertical: 20,
},
ProfileHeader: {
  backgroundColor: "black",
},
ProfileStoryImg: {
  width: 30,
  height: 30,
},
ProfileCommentImg: {
  width: 30,
  height: 30,
},
ProfileProfileImg: {
  width: 150,
  height: 150,
  borderRadius: 100,
},
ProfileProfileName: {
  fontSize: 33,
  textAlign: "center",
  fontWeight: "600",
  color:'white'
},
ProfileBio: {
  textAlign: "center",
  padding: 5,
  paddingBottom: 0,
  color:'white'
},
ProfileBioHash: {
  padding: 5,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
},
ProfileHash: {
  color: "blue",
  fontWeight: "300",
  fontSize: 13,
},
ProfileAccNum: {
  flexDirection: "row",
  justifyContent: "space-evenly",
  paddingTop: 10,
  color:'white'
},
ProfilePost: {
  justifyContent: "center",
  alignItems: "center",
},
ProfilePostNum: {
  fontSize: 25,
  fontWeight: "600",
  color:'white'
},
ProfilePosttxt: {
  color: "#636e72",
},
ProfileFollowBtn: {
  width: 100,
  height: 40,
  backgroundColor: "black",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  marginTop: 30,
  marginBottom: 30,
},
ProfileFollowtxt: {
  color: "black",
  fontWeight: "600",
},
ProfileStoryImg: {
  height: 35,
  width: 35,
},
ProfileStoryRing: {
  borderRadius: 43,
  justifyContent: "center",
  alignItems: "center",
  height: 88,
  width: 88,
  marginHorizontal: 10,
  marginTop: 10,
},
ProfileMyStoryRing: {
  borderRadius: 43,
  justifyContent: "center",
  alignItems: "center",
  height: 90,
  width: 90,
  marginHorizontal: 10,
  marginTop: 10,
},
ProfileStoryThumbnailImg: {
  height: 85,
  width: 85,
  borderRadius: 55,
  },
ProfileStoryThumbnail: {
  justifyContent: "center",
  alignItems: "center",
},
ProfileUsernametxt: {
  fontSize: 10,
  fontWeight: "500",
  color:'white',
  marginVertical: 10,
},
ProfilePlusHidden:{
  display: 'none'
},
ProfilePlusStyling: {
  position:'absolute',
  bottom:25,
  overflow:'visible',
}, 
ProfileButtonPls: {
  width:20,
  height:20,
  borderRadius:10,
  alignItems:'center',
  justifyContent:'center',
  borderColor:'white',
  borderWidth:2,
},
ProfilePlustxt: {
  color:'white',
  fontWeight:'700',
},

// Etiquetas Screen

EtiquetasContainer: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:'black'
},
EtiquetasImages: {
  flexDirection: "row",
  backgroundColor:'black',
  width: "100%",
},
EtiquetasFirstFlCont: {
  width: "50%",
},
EtiquetasSecondFl: {
  width: "50%",
},
EtiquetasFirstFlImg: {
  height: 300,
  width: "90%",
  margin: 20,
  borderRadius: 30,
  alignSelf: "center",
},
EtiquetasSecondFlImg: {
  height: 300,
  width: "90%",
  margin: 20,
  borderRadius: 30,
  alignSelf: "center",
},


// IGTV Screen

IGTVContainer: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:'black'
},
IGTVImages: {
  flexDirection: "row",
  width: "100%",
  backgroundColor:'black'
},
IGTVFirstFlCont: {
  width: "50%",
},
IGTVSecondFl: {
  width: "50%",
},
IGTVFirstFlImg: {
  height: 300,
  width: "90%",
  margin: 20,
  borderRadius: 30,
  alignSelf: "center",
},
IGTVSecondFlImg: {
  height: 300,
  width: "90%",
  margin: 20,
  borderRadius: 30,
  alignSelf: "center",
},

// Photo Screen

PhotoScreenContainer: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:'black'
},
PhotoScreenImages: {
  flexDirection: "row",
  width: "100%",
  backgroundColor:'black'
},
PhotoScreenFirstFlCont: {
  width: "50%",
},
PhotoScreenSecondFl: {
  width: "50%",
},
PhotoScreenFirstFlImg: {
  height: 300,
  width: "90%",
  margin: 20,
  borderRadius: 30,
  alignSelf: "center",
},
PhotoScreenSecondFlImg: {
  height: 300,
  width: "90%",
  margin: 20,
  borderRadius: 30,
  alignSelf: "center",
},


// Dm User 


DmUserContainer: {
  flex: 1,
  backgroundColor:'black'
},
DmUserDmTab: {
  height: '100%',
},
DmUserHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '98%',
  alignSelf: 'center',
  paddingTop: 5,
},
DmUserHeaderUsername: {
  flexDirection: 'row',
  alignItems: 'center',
},
DmUserHeaderUsernametxt: {
  paddingLeft: 5,
  fontSize: 20,
  color:'white',
  fontWeight: '500',
}
,
DmUserHeaderIcons: {
  flexDirection: 'row',
  alignItems: 'center',
},
DmUserAddButton: {
  paddingHorizontal: 7,
},


// Message Screen 

MessageContainer: {
  flex: 1,
  backgroundColor:'black'
},
MessageMessageContainer: {
  flexDirection: 'row',
  paddingVertical: 5,
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '95%',
  alignSelf: 'center',
},
MessageMessageImg: {
  width: 60,
  height: 60,
  borderRadius: 50,
},
MessageMiscInfo: {
  flexDirection: 'row',
},
MessageMessageInfo: {
  width: '70%',
  alignItems: 'flex-start'
},
MessageLastMessage: {
  color: 'grey',
},
MessageUsername: {
  fontSize: 20,
  fontWeight: '500',
  color:'white'
},


// Requests Screen 

RequestContainer: {
  flex: 1,
  alignItems: 'center',
},
RequestMessageInfotxt: {
  fontSize: 28,
  textAlign: 'center',
  paddingVertical: 10,
  fontWeight: '600',
  color:'white'
},
RequestMessageAddInfotxt: {
  fontSize: 15,
  textAlign: 'center',
  paddingVertical: 10,
  fontWeight: '500',
  color: 'grey'
},
RequestInfoIcon: {
  paddingTop: 50,
  paddingBottom: 30,
}
});

export default darkMode;