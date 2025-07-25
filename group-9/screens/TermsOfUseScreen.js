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
  return (
    <View>
                <View style={styles.taskbar}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}><Text style={styles.backbtn}>{'<'}Back</Text></TouchableOpacity>
                    <Text style={styles.Name}>Terms of Use</Text>
                </View>
                <View style={styles.textbox}>
                    <Text style={styles.text}>
                        Welcome to Ventreo. 
These terms govern your use of our marketplace app. By accessing or using the platform, you agree to comply with the following:
Eligibility Users must be 18 years or older or have legal parental or guardian consent. Access may be restricted or suspended for accounts found to be misrepresenting age or identity.
User Conduct Users agree to engage respectfully with others and refrain from abusive, deceptive, or disruptive behavior. This includes harassment, impersonation, and attempts to manipulate pricing, reviews, or transactions.
Account Responsibilities Each user is responsible for securing their login credentials and monitoring account activity. Unauthorized access must be reported immediately. Shared or impersonated accounts are not permitted.
Transactions All transactions are executed between users. The platform facilitates listings and communications but does not act as a seller, buyer, or payment guarantor. Disputes should be resolved directly between parties when possible.
Platform Integrity Users must not interfere with platform functionality, attempt to breach security measures, or exploit bugs or loopholes. Any automated or scripted usage must be pre-approved.
Modification and Suspension The platform reserves the right to modify features, suspend access, or terminate accounts that breach these terms or disrupt service for others.
Third-party Links and Tools Certain functions may link to third-party services. Use of these features is subject to their respective terms, and we are not liable for their content or actions.
Updates to Terms These Terms of Use may be updated from time to time. Continued use of the app after changes implies acceptance of the revised terms.
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
