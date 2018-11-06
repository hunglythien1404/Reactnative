import {StyleSheet, Dimensions, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';

export const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#04a5cf",
      alignItems: "center",
    },
    title: {
      color: "white",
      fontSize: 30,
    },
    logo: {
      width: Dimensions.get("window").width/2,
      height: Dimensions.get("window").height/3.5,
    },
    infoContent: {
      marginTop: 10,
    },
    iptTitle: {
      marginBottom: 3,
      fontSize: 18,
      color: "white",
    },
    input: {
      width: 300,
      height: 40,
      marginBottom: 10,
      borderRadius: 15,
      backgroundColor: "white",
    },
    btn: {
      width: 90,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 105,
      backgroundColor: "#FFCC66",
      borderRadius: 15,
    },
    btnText: {
      color: "white",
      fontSize: 18,
    },
    splCont: {
      justifyContent: "center",
    },
    splImg: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
    navContainer: {
      marginTop: 30,
      flexDirection: "row",
    },
    nav: {
      justifyContent: "center",
      alignItems: "center",
      width: 100,
      height: 30,
      marginHorizontal: 5,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "#FF6600",
    },
    navText: {
      fontSize: 18,
      color: "white",
    },
    menuIconLeft: {
      paddingLeft: 10,
      color: "white",
      fontSize: 30,
      backgroundColor: "#04a5cf",
    },
    menuIconRight: {
      paddingRight: 10,
      color: "white",
      fontSize: 30,
      backgroundColor: "#04a5cf",
    },
    userInfo: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "white",
      alignItems: "center",
    },
    imageStyle: {
      fontSize: 20,
      marginLeft:15,
      marginRight:20,
      alignSelf:'center',
      width:20,
      height:24,
      justifyContent:'center'
    },
    flatList: {
      padding: 10,
      flexDirection: "row",
      borderColor: "cyan",
      borderWidth: 1
    },
    flatListImage: {
      width: 100,
      height: 100,
      margin: 5,
    },
    flatListContent: {
      padding: 5,
      width: Dimensions.get("window").width - 120,
    },
    itemTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    itemContent: {
      fontSize: 12,
      color: "gray",
    }
  }
);