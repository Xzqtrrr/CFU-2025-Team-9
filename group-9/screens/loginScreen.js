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

import { useState } from "react";
export default function Login() {
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
        <Text style={{ textAlign: "center" }}>Ventreo</Text>
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
        <Text style={{ textAlign: "right", color: "#447604" }}>
          Forgot password?
        </Text>
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
      >
        <Text style={{ textAlign: "center" }}>Login</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <Text>
        New to Ventreo? <Text style={{ color: "#447604" }}>Sign Up</Text>
      </Text>
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
  },
});
