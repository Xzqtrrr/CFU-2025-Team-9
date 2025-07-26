import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useEffect } from "react";
import * as Font from 'expo-font';

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { DATA } from "../databases/vars";

// function CustomButton(prop) {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.btn}>
//       <TouchableOpacity
//         style={styles.btn2}
//         onPress={() => navigation.navigate("soon")}
//       >
//         <Text>{prop.name}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

export default function App() {
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
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}></View>
            <View>
              <Text style={{ position: "relative", marginTop: 55, fontFamily: "e-U-m", fontSize: 18, marginRight: 7}}>
                All startups        
              </Text>
            </View>
            <View style={{ width: "100%" }}>
              <TouchableOpacity style={{ position: "absolute", width: 75 }} onPress={navigation.goBack}>
                <Text style={{ marginTop: -20, marginLeft: 20, fontFamily:"e-U-l" }}>{"<"} Back</Text>
              </TouchableOpacity>
            </View>
      <FlatList
        style={{ marginTop: 50 }}
        horizontal={false}
        numColumns={"2"}
        data={DATA}
        renderItem={({ item }) => {
          const a = (144 * (item.total - item.left)) / item.total;
          return (
            <View style={styles.listItem}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("StartupScreen", { num: item.key })
                }
              >
                <Image style={styles.listItemImage} source={item.image} />
                <View style={styles.listItemName}>
                  <Icon name={"person-outline"} size={16} color="black" />
                  <Text style={styles.listItem1}>{item.nameOfStartuper}</Text>
                </View>
                <Text style={styles.listNameOfProject}>
                  {item.nameOfProject}            
                </Text>
                <Text style={styles.listItem3}>
                  <Text style={styles.listItem2}>${item.left}</Text>of$
                  {item.total}left
                </Text>
                <View style={{ width: 144 }}>
                  <View
                    style={{
                      width: "100%",
                      borderRadius: 3,
                      height: 5,
                      position: "absolute",
                      backgroundColor: "#A1A1A1",
                    }}
                  ></View>
                  <View
                    style={{
                      marginBottom: 1,
                      marginLeft: 1,
                      borderRadius: 3,
                      width: a,
                      height: 5,
                      position: "absolute",
                      backgroundColor: "#447604",
                    }}
                  ></View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    width: 160,
    height: 200,
    margin: 10,

    alignItems: "center",
    borderRadius: 9,
    backgroundColor: "#F2F2F2",
  },
  listItemName: {
    width: "1000000%",
    margin: 10,
    borderRadius: 25,
    flexDirection: "row"
  },
  listItem1: {
    marginLeft: 7,
    fontFamily: 'e-U-ul',
    fontSize: 12
  },
  listItem3: {
    marginLeft: 3,
    fontFamily: 'e-U-ul',
    fontSize: 10
  },
  listItem2: {
    marginLeft: 7,
    fontFamily: 'e-U-b',
    fontSize: 17
  },
  listItemImage: {
    marginTop: 11,
    width: 143,
    borderRadius: 3,
    height: 101,
    backgroundColor: "black",
  },
  listNameOfProject: {
    width: "1000000000000%",
    fontFamily: 'e-U-r',
    fontSize: 16,
    marginTop: -5,
    marginBottom:7,
    marginLeft: 7
  },
});
