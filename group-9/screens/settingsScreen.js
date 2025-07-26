import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import * as Font from 'expo-font';
import { useEffect } from "react";

function SettButton(prop) {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles.settButton} onPress={()=> navigation.navigate("About")}>
        <Icon name={prop.icon} size={16} color="black" />
        <Text style={{ marginLeft: 10 }}>{prop.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
function UnderLine() {
  return (
    <View
      style={{
        height: 1,
        width: "70%",
        backgroundColor: "#A5A5A5",
        marginLeft: "15%",
        marginTop: 10,
      }}
    ></View>
  );
}

export default function Profile() {
  useEffect(()=>{
    async function loadFont() {
      await Font.loadAsync({
        'e-Ukraine-Light': require('../assets/fonts/e-Ukraine-Light.otf'),
        'e-Ukraine-Bold': require('../assets/fonts/e-Ukraine-Bold.otf'),
      });
    };

    loadFont();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.prof_img} source={require("../assets/avar.png")} />
      <Text style={styles.nickname}> User </Text>
      <View style={{ marginBottom: 30, flexDirection: "row" }}>
        <Icon name={"call-outline"} size={16} color="black" />
        <Text> +141141414141</Text>
      </View> 

      <View style={{ width: "100%" }}>
        <SettButton icon={"person-outline"} text={"Account settings"} />
        <UnderLine />
        <SettButton icon={"add-outline"} text={"Create startup"} />
        <UnderLine />
        <SettButton icon={"heart-outline"} text={"Favourites"} />
        <UnderLine />
        <SettButton
          icon={"notifications-outline"}
          text={"Notification settings"}
        />
        <UnderLine />
        <SettButton icon={"lock-closed-outline"} text={"Security settings"} />
        <UnderLine />
        <SettButton icon={"globe-outline"} text={"Language"} />
        <UnderLine />
        <SettButton icon={"accessibility-outline"} text={"Accessibility"} />
        <UnderLine />
        <SettButton icon={"information-circle-outline"} text={"About"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
  },

  prof_img: {
    width: 151,
    height: 151,
    marginTop: 95,

    borderRadius: 75,
  },
  settButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: "10%",
  },
  nickname:{
    fontSize: 25, 
    fontFamily: "e-Ukraine-Bold" 
  }
});
