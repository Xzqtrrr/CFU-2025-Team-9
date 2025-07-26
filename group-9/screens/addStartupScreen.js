import {
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../databases/vars.js";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { useState } from "react";
export default function Login() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  
  const [money, setMoney] = useState("");
  const [Disc, setDisc] = useState("");
  return (
    <SafeAreaView style={styles.container}>
        
        <View style={{ marginTop: 100, marginBottom: 10, height: 295, width: '100%', backgroundColor: '#E1E1E1', }}>
                <View style={{flexDirection: 'row', justifyContent: 'center', position: 'relative', paddingTop: 295/2-8 }}><Icon name={'download-outline'} size={16} color="black" />
                        <Text>lgsjn</Text></View>
                        
        </View>
    <ScrollView style={{width: '95%'}}>
      <View style={styles.textinput1}>

            <Text>Project name</Text>
        <View style={styles.textinput2}>
          <TextInput
            style={styles.textinput3}
            value={name}
            onChangeText={setName}
            placeholder="type here..."
          />
        </View>
        
            <Text>Category name</Text>
        <View style={styles.textinput2}>
          <TextInput
            style={styles.textinput3}
            value={category}
            onChangeText={setCategory}
            placeholder="type here..."
          />
        </View>


            <Text>Amount of money your project need</Text>
        <View style={styles.textinput2}>
          <TextInput
            style={styles.textinput3}
            value={money}
            onChangeText={setMoney}
            placeholder="type here..."
          />
        </View>

            <Text>Description</Text>
        <View style={styles.textinput4}>
          <TextInput
            style={styles.textinput3}
            value={Disc}
            onChangeText={setDisc}
            placeholder="type here..." 
          />
        </View>

        </View>
        <View style={{marginTop: 10, width: '100%', justifyContent: 'center'}}><TouchableOpacity style={{backgroundColor: '#447604',  width: '80%',alignSelf: 'center', height: 40, borderRadius: 10, justifyContent: 'center'}}><Text style= {{color: 'white', opacity: .75, textAlign: 'center'}}>Publish</Text></TouchableOpacity></View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    
  },

  logimage: {
    width: 150,
    height: 150,
  },
  textinput1: {
    justifyContent: "center",
    width: "95%",
  },
  textinput2: {
    width: "100%",
    textAlign: "center",
    justifyContent: "spase-around",
    height: 40,
    backgroundColor: "#E1E1E1",
    marginTop: 10,
    borderRadius: 10,
  },
  
  textinput3: {
    color: "#909090",
  },
    textinput4: {
    width: "100%",
    textAlign: "center",
    //  padding: 5,
    height: 140,
    backgroundColor: "#E1E1E1",
    marginTop: 10,
    borderRadius: 10,
    
  },
});
