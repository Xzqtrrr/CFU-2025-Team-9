import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useEffect } from "react";
import * as Font from 'expo-font';

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";

function CustomButton(prop) {
  const cat = prop.cat;
  const navigation = useNavigation();
  return (
    <View style={styles.btn}>
      <TouchableOpacity
        style={styles.btn2}
        onPress={() => navigation.navigate("StList", { cat: cat })}
      >
        <Icon name={prop.icon} size={75} color="black" />
        <Text style={styles.btntext}>{prop.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Home(prop) {
  const navigation = useNavigation();
    useEffect(()=>{
          async function loadFont() {
            await Font.loadAsync({
              'e-Ukraine-Light': require('../assets/fonts/e-Ukraine-Light.otf'),
              'e-Ukraine-Medium': require('../assets/fonts/e-Ukraine-Medium.otf'),
              'e-Ukraine-Regular': require('../assets/fonts/e-Ukraine-Regular.otf'),
              'e-Ukraine-Bold': require('../assets/fonts/e-Ukraine-Bold.otf'),
              'eUt': require('../assets/fonts/e-Ukraine-Thin.otf')
            });
          };
      
          loadFont();
        }, []);

  //  const { screenwidth, screenheight } = useWindowDimensions();
  //  const img_margitTop = (screenwidth-151) / 2
  return (
    
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#E1E1E1",
          width: "90%",
          height: 30,
          marginTop: 52,
          borderRadius: 15,
        }}
      >
        <TouchableOpacity 
        onPress={() => navigation.navigate("Active Startups")}
          style={{ justifyContent: 'space-between', flexDirection: "row", alignItems: 'center' }}
        >
          <Text style={{ marginLeft: 15, fontFamily: "eUt", fontSize: 12, marginTop: "2%"}}>search</Text>
          <Icon name={"search-outline"} size={15} color="black" style={{ marginRight: 15, marginTop: "2%" }}/>
        </TouchableOpacity>
      </View>
      <Image style={styles.prof_img} source={require("../assets/avar.png")} />
      <Text style={{ fontFamily: "e-Ukraine-Bold", fontSize: 44 }}> Hi, User!</Text>
      <Text style={{ fontFamily: "e-Ukraine-Light", fontSize: 20 }}>What are you</Text>
      <Text style={{ fontFamily: "e-Ukraine-Light", fontSize: 20 }}>going to look for today?</Text>
      <View style={{ marginTop: 50 }}>
        <View style={styles.lists1}>
          <View style={styles.lists2}>
            <CustomButton
              style={styles.lists3}
              name={"IT"}
              cat={"IT"}
              icon={"laptop-outline"}
            />
            <CustomButton
              style={styles.lists3}
              name={"Fun"}
              cat={"Fun"}
              icon={"ticket-outline"}
            />
          </View>
          <View style={styles.lists2}>
            <CustomButton
              style={styles.lists3}
              name={"EdTech"}
              cat={"EdTech"}
              icon={"school-outline"}
            />
            <CustomButton
              name={"Business"}
              cat={"Business"}
              icon={"briefcase-outline"}
            />
          </View>
          <View style={styles.lists2}>
            <CustomButton
              style={styles.lists3}
              name={"Brands"}
              cat={"Brands"}
              icon={"shirt-outline"}
            />
            <CustomButton
              style={styles.lists3}
              name={"Voluntary"}
              cat={"Voluntary"}
              icon={"people-outline"}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    //  justifyContent: 'center',
  },
  btn: {
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 3,
  },
  btn2: {
    backgroundColor: "#F9F9F9",
    alignItems: "center",

    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    borderRadius: 15,
    width: 110,
    height: 110,
    margin: 1,
  },
  prof_img: {
    width: 151,
    height: 151,
    marginTop: 70,
    opacity: 0.75,
    borderRadius: 75,
  },
  lists1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  lists2: {
    flexDirection: "column",
  },
  lists3: {
    borderWidth: 2,
    borderColor: "black",
  },
  btntext:{
    fontFamily: "e-Ukraine-Regular",
    fontSize: 18,
  }
});
