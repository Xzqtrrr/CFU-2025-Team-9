import {
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { AuthContext } from "../databases/vars.js";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import * as Font from "expo-font";

import { useState } from "react";
export default function Login() {
  useEffect(()=>{
            async function loadFont() {
              await Font.loadAsync({
                'e-Ukraine-Light': require('../assets/fonts/e-Ukraine-Light.otf'),
                'e-Ukraine-Medium': require('../assets/fonts/e-Ukraine-Medium.otf'),
                'e-Ukraine-Regular': require('../assets/fonts/e-Ukraine-Regular.otf'),
                'e-Ukraine-Bold': require('../assets/fonts/e-Ukraine-Bold.otf'),
                'e-Uh-logo': require('../assets/fonts/e-UkraineHead-LOGO.otf'),
                'e-Ukraine-ul': require('../assets/fonts/e-Ukraine-UltraLight.otf'),
                'e-U-t': require('../assets/fonts/e-Ukraine-Thin.otf')
              });
            };
        
      loadFont();
  }, []);
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text></Text>
      <View>
        <Image
          style={styles.logimage}
          source={require("../assets/treeicon.png")}
        />
        <Text style={{fontFamily: 'e-Uh-logo', textAlign: "center", fontSize: 14, marginTop:-15, marginBottom: 10}}>Ventreo</Text>
      </View>
      <Text></Text>
      <View style={styles.textinput1}>
        <View style={styles.textinput2}>
          <TextInput
            style={styles.textinput3}
            value={login}
            onChangeText={setLogin}
            placeholder="Login"
          />
        </View>
        <View style={styles.textinput2}>
          <TextInput
            style={styles.textinput3}
            value={pass}
            onChangeText={setPass}
            placeholder="Password"
          />
        </View>
        <View style={{opacity: 0.75}}>
          <Text style={{ textAlign: "right", color: "#447604", fontFamily: "e-Ukraine-ul", fontSize: 10, marginTop: 2,}}>
            Forgot password?
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#F1F1F1",
          width: 301,
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
        }}
        onPress={() =>
          navigation.navigate("Tabs", {
            screen: "Home",
            params: { name: login },
          })
        }
      > <View style={{opacity:0.75}}>
        <Text style={{ textAlign: "center", fontFamily: 'e-U-t', fontSize: 24 }}>Log In</Text>
        </View>
      </TouchableOpacity>
      <Text></Text>
      <View style={{flexDirection:"row", opacity: 0.75}}>
      <Text style={{fontFamily: "e-U-t", fontSize: 15}}>
        New to Ventreo?  </Text> <Text style={{ color: "#447604", fontFamily:"e-U-t", fontSize:15 }}>Sign Up</Text>
      </View>
      <Text></Text>

      <></>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "space-around",
  },

  logimage: {
    width: 150,
    height: 150,
  },
  textinput1: {
    justifyContent: "center",
    width: "90%",
  },
  textinput2: {
    width: "100%",
    textAlign: "center",
    justifyContent: "spase-around",
    height: 40,
    backgroundColor: "#E1E1E1",
    marginTop: 10,
    borderRadius: 50,
  },
  textinput3: {
    color: "#909090",
    fontFamily: "e-Ukraine-ul",
    fontSize:10,
    marginTop: "1%",
    marginLeft: "2%"
  },
});
