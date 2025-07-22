import { TouchableOpacity, View, Text, StyleSheet,  } from "react-native";

import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function App() {
    
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
        <Text>Login</Text>
      </TouchableOpacity>
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
});
