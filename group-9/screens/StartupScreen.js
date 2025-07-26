import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect } from "react";
import * as Font from 'expo-font';


import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";
import { DATA } from "../databases/vars";

export default function App(prop) {
  useEffect(()=>{
              async function loadFont() {
                await Font.loadAsync({
                  'e-U-l': require('../assets/fonts/e-Ukraine-Light.otf'),
                  'e-U-m': require('../assets/fonts/e-Ukraine-Medium.otf'),
                  'e-U-r': require('../assets/fonts/e-Ukraine-Regular.otf'),
                  'e-U-b': require('../assets/fonts/e-Ukraine-Bold.otf'),
                  'e-U-t': require('../assets/fonts/e-Ukraine-Thin.otf'),
                  'e-U-ul': require('../assets/fonts/e-Ukraine-UltraLight.otf'),
                });
              };
          
              loadFont();
            }, []);
  const navigation = useNavigation();
  const filteredData = DATA.filter(
    (item) => item.key === prop.route.params.num
  );

  const a =
    (100 * (filteredData[0].total - filteredData[0].left)) /
    filteredData[0].total;
  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <Text style={{ marginTop: 55, fontFamily: "e-U-m", fontSize: 18, marginLeft: "3%" }}>{filteredData[0].nameOfProject}</Text>
        <Text style={{fontFamily:"e-U-ul", fontSize: 12}}>
          {" "}
          by <>{filteredData[0].nameOfStartuper}</>
        </Text>
      </View>
      <View style={{ position: "absolute", width: "100%" }}>
        <TouchableOpacity style={{ width: 75 }} onPress={navigation.goBack}>
          <Text style={{ marginTop: 62, marginLeft: 20, fontFamily:"e-U-l"  }}>{"<"} Back</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={{ marginTop: 10, width: "100%", height: 295 }}
        source={filteredData[0].image}
      />
      <View
        style={{   marginTop: 8, width: "97%", borderRadius: 5, backgroundColor: "#F4F4F4" }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ margin: "2%" }}>
            <Text style={styles.listItem2}>${filteredData[0].left}</Text> of $
            {filteredData[0].total} left
          </Text>
          <Text style={{ margin: "2%" }}>{Math.round(a)}%</Text>
        </View>
        <View
          style={{
            width: "97%",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              borderRadius: 3,
              height: 5,
              position: "relative",
              backgroundColor: "#A1A1A1",

              marginBottom: 5,
            }}
          ></View>
          <View
            style={{
              borderRadius: 3,
              width: `${a}%`,
              height: 5,
              position: "absolute",
              backgroundColor: "#447604",
            }}
          ></View>
        </View>
      </View>

      <Text style={{ width: "98%",fontFamily: "e-U-ul", fontSize:12, marginTop: "2%" }}>Description</Text>
      <Text style={{ width: "92%", fontFamily: 'e-U-r', fontSize:12, marginTop: "2%" }}> {filteredData[0].moreAbout} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
  listItem2:{
    fontFamily: "e-U-b",
    fontSize: 15
  }
});
