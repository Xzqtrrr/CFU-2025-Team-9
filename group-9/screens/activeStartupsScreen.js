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

import { DATA } from "../databases/vars";

function CustomButton(prop) {
  const navigation = useNavigation();
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

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginTop: 120 }}
        horizontal={false}
        numColumns={"2"}
        data={DATA}
        renderItem={({ item }) => {
          const a = (144 * (item.total - item.left)) / item.total;
          return (
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Image style={styles.listItemImage} />
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
                      height: 5,
                      position: "absolute",
                      backgroundColor: "black",
                    }}
                  ></View>
                  <View
                    style={{
                      width: a,
                      height: 5,
                      position: "absolute",
                      backgroundColor: "green",
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
