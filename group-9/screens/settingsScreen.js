import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!123 rsgln</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
  },

  prof_img: {
    width: 151,
    height: 151,
    marginTop: 95,

    borderRadius: 75,
  },
  settButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: "10%",
  },
});
