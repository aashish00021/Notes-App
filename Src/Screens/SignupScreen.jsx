import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import BackButton from '../components/backButton';
import IMAGES from '../Assets/images';
import { useNavigation } from '@react-navigation/native';


const {width} = Dimensions.get('window');

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleDone = () =>{
    if(email && password){
      navigation.goBack();
    }else{
      Alert.alert('Please fill all the coloums')
    }
  };
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
      <View style = {styles.inputContainer}>
        <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style = {styles.inputEmail}
        />
        <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry = {true}
        style = {styles.inputPassword}
        />
      </View>
      <TouchableOpacity
        onPress={handleDone}
        style = {styles.doneButton}
      >
        <Text style = {styles.done}>Done</Text>
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
  inputContainer:{
    marginHorizontal:20,
    marginTop:50,
    justifyContent:'center',
  },
  inputEmail:{
    borderWidth:0.5,
    borderRadius:18,
    padding:15,
    fontSize:16,
    marginBottom:25,
  },
  inputPassword:{
    borderWidth:0.5,
    borderRadius:18,
    padding:15,
    fontSize:16,
  },
  doneButton:{
    backgroundColor:'#4A90E2',
    marginHorizontal:20,
    marginTop:40,
    padding:15,
    borderRadius:20,
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
  },
  done:{
    textAlign:'center',
    fontSize:22,
    color:'#fff',
  },
});

export default SignupScreen;
