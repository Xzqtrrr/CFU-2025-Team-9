import { TouchableOpacity, View, Image, Text, StyleSheet, useWindowDimensions} from "react-native";

import { NavigationContainer, useNavigation } from '@react-navigation/native';




function CustomButton (prop) {
      const cat = prop.cat
      const navigation = useNavigation();
      return(

      <View style={styles.btn}>
        <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('StList', {cat: cat})}>
          <Text>{prop.name}</Text>
        </TouchableOpacity>
      </View>
      )

};


export default function Home(prop) {
    
  const navigation = useNavigation();


//  const { screenwidth, screenheight } = useWindowDimensions();
//  const img_margitTop = (screenwidth-151) / 2
  return (


    <View style={styles.container}>
    
          <Image style={styles.prof_img} source={require('../assets/avar.png')}/>
          <Text style= { {fontSize: 44}} > Hi, {prop.route.params.name}!</Text>
          <Text style= { {fontSize: 20}}>What are you</Text>
          <Text style= { {fontSize: 20}}>going to look for today?</Text>
        <View style={{marginTop: 50}}>
        <View style={styles.lists1}>
          <View style={styles.lists2}>
            <CustomButton name={'sigA'} cat={'a'}/>
            <CustomButton name={'sigB'} cat={'b'}/>
          </View>
          <View style={styles.lists2}>
          
            <CustomButton name={'sigc'}  cat={'c'}/>
            <CustomButton name={'sig2'}/>
          </View>
          <View style={styles.lists2}>

            <CustomButton name={'sig1'}/>
            <CustomButton name={'sig2'}/>
          </View>
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
    margin: 3,
  },
    btn2: {
    backgroundColor: "#DDD",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 110,
    height: 110,
    margin: 1,
  },
  prof_img: {
    width: 151,
    height: 151,
    marginTop: 70,
    
    borderRadius: 75,
  },
  lists1: {
     flexDirection: 'row',
     justifyContent: 'center',
  },  lists2: {
    flexDirection: 'column',
  }
});
