import { TouchableOpacity, View, SafeAreaView, Text, StyleSheet, Image, TextInput } from "react-native";

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { useState } from "react";
export default function App() {
    
  const navigation = useNavigation();
  
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  return (
    <SafeAreaView style={styles.container}>

      
      <Text></Text>
      <Text></Text>
      <View><Image style={styles.logimage} source={{uri:"https://i.ytimg.com/vi/iO6wwqq_Y7k/hqdefault.jpg"}} />
      <Text>Untitled</Text></View>
      <Text></Text>
      <View style= {styles.textinput1}>
          <View style={styles.textinput2}>
            <TextInput 
            value={login}
            onChangeText={setLogin}
            placeholder="Login"
            />
          </View>
          <View style={styles.textinput2}>
            <TextInput 
            value={pass}
            onChangeText={setPass}
            placeholder="Password"
            />
          </View>
          <Text>{login}, {pass}</Text>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  
  logimage: {
    width: 150, 
    height: 150,
    backgroundColor: 'black'
  },
  textinput1: {
    justifyContent: 'center',
    width: '90%'
},
  textinput2: {
    width: '90%', 
    textAlign: 'center',
    justifyContent: 'spase-around',
    height:40,
    backgroundColor: 'lightgray',
    marginTop: 5,
  },
});
