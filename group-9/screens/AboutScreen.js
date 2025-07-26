import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import * as Font from 'expo-font';

function UnderLine() {
  return (
    <View
      style={{
        height: 1,
        width: "80%",
        backgroundColor: "#A5A5A5",
        marginLeft: "10%",
        marginTop: 10,
      }}
    ></View>
  );
}

function SettButton(prop) {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles.settButton} onPress={()=> navigation.navigate(prop.destination)}>
        <Text style={styles.btntext}>{prop.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
   useEffect(()=>{
       async function loadFont() {
         await Font.loadAsync({
           'e-Ukraine-Light': require('../assets/fonts/e-Ukraine-Light.otf'),
           'e-Ukraine-Medium': require('../assets/fonts/e-Ukraine-Medium.otf'),
         });
       };
   
       loadFont();
     }, []);
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
            <View style={styles.taskbar}>
                <TouchableOpacity onPress={()=> navigation.goBack()}><Text style={styles.backbtn}>{'<'}Back</Text></TouchableOpacity>
                <Text style={styles.Name}>About</Text>
            </View>
        <SettButton text={">    Terms of Use"} destination={"Terms"}/>
        <UnderLine/>
        <SettButton text={">    Privacy Policy"} destination={"PrivacyPolicy"}/>
        <UnderLine/>
        <SettButton text={">    Intellectual Property Policy"}/>
        <UnderLine/>
        <SettButton text={">    Contact Us"}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "left",
        justifyContent: "top",
    },
    taskbar:{
        marginLeft: "4%",
        marginBottom: "4%",
        marginTop: "14%",
        marginRight: "4%",
        flexDirection: "row",
        alignItems: "center"
    },
    backbtn:{
        fontFamily: "e-Ukraine-Light",
        fontSize: 12
    },
    settButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: "8%",
    fontFamily: "e-Ukraine"
  },
  btntext:{
    fontFamily: "e-Ukraine-Light",
    fontSize: 13,
    alignItems: "center"
  },
  Name:{
    fontFamily: "e-Ukraine-Medium",
    fontSize: 18,
    marginLeft: "33%"
  }
});