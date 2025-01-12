import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import BackButton from '../components/backButton';
import IMAGES from '../Assets/images';


const {width} = Dimensions.get('window');

const SignupScreen = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style = {{flex:1, backgroundColor:'#fff', paddingTop:19}}>
      <View style = {styles.backButton}>
        <BackButton />
      </View>
      <Text style = {styles.headertext}>Create a new Account</Text>
      <View style = {styles.ImageContainer}>
        <Image style = {styles.image} source={IMAGES.LOGIN}/>
      </View>
      <View>
        <TextInput
        placeholder='Email'

        />
        <TextInput
        placeholder='Set Password'

        />
      </View>
      <TouchableOpacity>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton:{
    position:'absolute',
    zIndex:1,
    top:17,
    left:13,
  },
  ImageContainer:{
    height:width * 0.8,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
  },
  image:{
    height:'100%',
    width:width * 1,
  },
  headertext:{
    textAlign:'center',
    fontSize:23,
    fontWeight:'500',
  },
});

export default SignupScreen;
