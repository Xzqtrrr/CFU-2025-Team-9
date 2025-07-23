import { TouchableOpacity, View, Image, Text, StyleSheet, useWindowDimensions} from "react-native";

import { NavigationContainer, useNavigation } from '@react-navigation/native';




function CustomButton (prop) {
      
      const navigation = useNavigation();
      return(

      <View style={prop.style}>
        <TouchableOpacity onPress={() => navigation.navigate('StList')}>
          <Text>{prop.name}</Text>
        </TouchableOpacity>
      </View>
      )

};


export default function App(prop) {
    
  const navigation = useNavigation();


//  const { screenwidth, screenheight } = useWindowDimensions();
//  const img_margitTop = (screenwidth-151) / 2
  return (


    <View style={styles.container}>
    
          <Image style={styles.prof_img}/>
          <Text style= { {fontSize: 44}} > Hi, {prop.route.params.name}!</Text>
          <Text style= { {fontSize: 20}}>What are you</Text>
          <Text style= { {fontSize: 20}}>going to look for today?</Text>

        <View style={styles.lists1}>
          <View style={styles.lists2}>
            <CustomButton style={styles.btn} name={'sig1'}/>
            <CustomButton style={styles.btn} name={'sig2'}/>
          </View>
          <View style={styles.lists2}>
          
            <CustomButton style={styles.btn} name={'sig1'}/>
            <CustomButton style={styles.btn} name={'sig2'}/>
          </View>
          <View style={styles.lists2}>

            <CustomButton style={styles.btn} name={'sig1'}/>
            <CustomButton style={styles.btn} name={'sig2'}/>
          </View>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //  justifyContent: 'center',
  },
  btn: {
    backgroundColor: "#DDD",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 110,
    height: 110,
    margin: 5,
  },
  prof_img: {
    width: 151,
    height: 151,
    backgroundColor: 'black',
    marginTop: 70,
    
    borderRadius: 75,
  },
  lists1: {
    // flexDirection: 'row',
     justifyContent: 'center',
  },  lists2: {
    flexDirection: 'row',
  }
});
