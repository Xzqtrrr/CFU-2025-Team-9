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

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";
import { DATA } from "../databases/vars";

export default function App(prop) {
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
        <Text style={{ marginTop: 55 }}>{filteredData[0].nameOfProject}</Text>
        <Text>
          {" "}
          by <>{filteredData[0].nameOfStartuper}</>
        </Text>
      </View>
      <View style={{ position: "absolute", width: "100%" }}>
        <TouchableOpacity style={{ width: 75 }} onPress={navigation.goBack}>
          <Text style={{ marginTop: 62, marginLeft: 20 }}>{"<"} Back</Text>
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
            <Text style={styles.listItem1}>${filteredData[0].left}</Text> of $
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
              //`${a}`
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

      <Text style={{ width: "98%" }}>Description</Text>
      <Text style={{ width: "92%" }}> {filteredData[0].moreAbout} </Text>
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
});
