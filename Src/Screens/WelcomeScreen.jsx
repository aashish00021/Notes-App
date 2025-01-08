import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import IMAGES from '../Assets/images';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor={'#fff'}/>
      <View style = {styles.ImageContainer}>
      <View style = {{marginBottom:30}}>
        <Text style={styles.headerText}>Organize Your Ideas</Text>
      </View>
        <Image
          style={styles.image}
          source={IMAGES.WELCOME}
        />
      </View>
      <View>
        <TouchableOpacity
        onPress={ () => navigation.navigate('Login')}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 40,
    fontWeight: '600',
    color: 'grey',
  },
  ImageContainer:{
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red',
    height:'70%'
  },
  image: {
    height:'70%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});

export default WelcomeScreen;
