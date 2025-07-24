import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

import {DATA} from "../databases/vars";

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
          
            return (
              <View>
                <Text style={styles.listItem}>{item.text}</Text>
              </View>
            );
          }
        }
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    listItem: {
    width: 150,
    height: 200,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "lightgrey",
  },
});
