import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import * as Font from 'expo-font';

function UnderLine() {
  return (
    <View
      style={{
        height: 1,
        width: "80%",
        backgroundColor: "#A5A5A5",
        marginLeft: "10%",
        marginTop: 10,
      }}
    ></View>
  );
}

function SettButton(prop) {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles.settButton}>
        <Text style={styles.btntext}>{prop.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
    useEffect(()=>{
        async function loadFont() {
          await Font.loadAsync({
            'e-Ukraine-Light': require('../assets/fonts/e-Ukraine-Light.otf'),
            'e-Ukraine-Medium': require('../assets/fonts/e-Ukraine-Medium.otf'),
            'e-Ukraine-Regular': require('../assets/fonts/e-Ukraine-Regular.otf'),
          });
        };
    
        loadFont();
      }, []);
      const navigation = useNavigation()
  return (
    <View>
                <View style={styles.taskbar}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}><Text style={styles.backbtn}>{'<'}Back</Text></TouchableOpacity>
                    <Text style={styles.Name}>Privacy Policy</Text>
                </View>
                <View style={styles.textbox}>
                    <Text style={styles.text}>
                       Ventreo is committed to protecting your privacy. This policy outlines how we handle personal information when you use our marketplace app.{"\n"}
Information We Collect {"\n"}     We may collect basic information such as your name, email address, contact details, and account activity. Technical data such as device type, operating system, and app usage may also be collected to improve performance and security.{"\n"}
How We Use Your Information{"\n"}     We use your data to operate, maintain, and improve the app experience. Examples include account verification, customer support, and ensuring the integrity of transactions and listings.{"\n"}
Data Sharing{"\n"}     We do not sell your personal data. We may share it with trusted service providers who support platform operations (e.g., hosting, analytics). These providers are obligated to protect your information.{"\n"}
Your Control{"\n"}     You can access, update, or delete your account information through your settings. Requests related to data access or removal can be made via [support@email.com].{"\n"}
Data Retention{"\n"}     We retain data as needed to provide services and meet legal obligations. Inactive accounts may have their data deleted after a period of non-use.{"\n"}
Security{"\n"}     We implement reasonable measures to protect your data against unauthorized access or loss. However, no system is completely secure.{"\n"}
Changes to This Policy{"\n"}     This Privacy Policy may be updated occasionally. Any material changes will be communicated through the app or email.{"\n"}
                    </Text>
                </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    taskbar:{
        marginLeft: "4%",
        marginBottom: "4%",
        marginTop: "14%",
        marginRight: "4%",
        flexDirection: "row",
        alignItems: "center"
    },
    backbtn:{
        fontFamily: "e-Ukraine-Light",
        fontSize: 12
    },
    settButton: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        marginLeft: "8%",
        fontFamily: "e-Ukraine"
    },
    btntext:{
        fontFamily: "e-Ukraine-Light",
        fontSize: 13,
        alignItems: "center"
    },
    Name:{
        fontFamily: "e-Ukraine-Medium",
        fontSize: 18,
        marginLeft: "23%"
    },
    textbox: {
        marginLeft: "6%",
        marginRight: "6%"
    },
    text: {
        fontFamily: 'e-Ukraine-Regular',
        fontSize: 12
    }
});