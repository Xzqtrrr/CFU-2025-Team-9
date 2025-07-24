import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


function SettButton(prop){
  return(
      <View>
      <TouchableOpacity style={styles.settButton}>
        <Icon name={prop.icon} size={16} color="black" />
        <Text style={{marginLeft: 10}}>{prop.text}</Text>
      </TouchableOpacity>
         </View>
      )
}
function UnderLine(){
  return( 
    <View style={{height: 1, width: '70%', backgroundColor: 'black', marginLeft: "15%", marginTop: 10}}></View>
  )
}




export default function Profile() {
  return (
     <View style={styles.container}>
      <Image style={styles.prof_img} source={require('../assets/avar.png')}/>  
      <Text style={{fontSize: 25}}>  Name </Text>
     <View style={{marginBottom: 30, flexDirection: 'row'}}> 
       <Icon name={'call-outline'} size={16} color="black"/> 
      <Text>   +141141414141</Text></View> 
       
      <View style={{ width: '100%'}}>
        <SettButton icon={'person-outline'} text={'Account settings'}/>
        <UnderLine/>
        <SettButton icon={'add-outline'} text={'Create startup'}/>
        <UnderLine/>
        <SettButton icon={'heart-outline'} text={'Favourites'}/>
        <UnderLine/>
        <SettButton icon={'notifications-outline'} text={'Notification settings'}/>
        <UnderLine/>
        <SettButton icon={'lock-closed-outline'} text={'Security settings'}/>
        <UnderLine/>
        <SettButton icon={'globe-outline'} text={'Language'}/>
        <UnderLine/>
        <SettButton icon={'accessibility-outline'} text={'Accessibility'}/>
        <UnderLine/>
        <SettButton icon={'information-circle-outline'} text={'About'}/>

      </View> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  
  prof_img: {
    width: 151,
    height: 151,
    marginTop: 95,
    
    borderRadius: 75,
  },
  settButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: "10%"

  }
});
