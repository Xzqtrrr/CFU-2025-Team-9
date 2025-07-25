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

function CustomButton(prop) {
  return (
    <View style={styles.btn}>
      <TouchableOpacity
        style={styles.btn2}
        onPress={() => navigation.navigate("soon")}
      >
        <Text>{prop.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

// export default function App(prop) {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         style={{ marginTop: 120 }}
//         horizontal={false}
//         numColumns={"2"}
//         data={DATA}
//         renderItem={({ item }) => {
//           if (item.category === prop.route.params.cat) {
//             return (
//               <View>
//                 <Text style={styles.listItem}>{item.text}</Text>
//               </View>
//             );
//           }
//         }}
//       />
//     </View>
//   );
// }

export default function App(prop) {
  
  const navigation = useNavigation();
  const filteredData = DATA.filter(
    (item) => item.category === prop.route.params.cat
  );  
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginTop: 120 }}
        horizontal={false}
        numColumns={"2"}
        data={filteredData}
        renderItem={({ item }) => {
          const a = (144 * (item.total - item.left)) / item.total;
          return (
            <View style={styles.listItem}>
              <TouchableOpacity  onPress={() =>
                  navigation.navigate("StartupScreen", { num: item.key })
                }>
                <Image style={styles.listItemImage} source={item.image} />
                <View style={styles.listItemName}>
                  <Icon name={"person-outline"} size={16} color="black" />
                  <Text style={styles.listItem1}>{item.nameOfStartuper}</Text>
                </View>
                <Text style={styles.listNameOfProject}>
                  {item.nameOfProject}
                </Text>
                <Text style={styles.listItem1}>
                  <Text style={styles.listItem1}>${item.left}</Text> of $
                  {item.total} left
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
    width: "80%",
    margin: 10,
    borderRadius: 25,
    flexDirection: "row",
  },
  listItem1: {
    marginLeft: 7,
  },
  listItemImage: {
    marginTop: 11,
    width: 143,
    borderRadius: 3,
    height: 101,
    backgroundColor: "black",
  },
  listNameOfProject: {
    width: "80%",
  },
});
