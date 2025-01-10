import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import IMAGES from '../Assets/images';

const { width } = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content"/>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Welcome to</Text>
        <Text style={styles.appNameText}>Notes App</Text>
        <View style={styles.ImageContainer}>
            <Image
              style={styles.image}
              source={IMAGES.WELCOME}
            />
        </View>
        <Text style={styles.subtitleText}>Capture your thoughts, organize your life</Text>
        <View style={styles.bottom}>
          <TouchableOpacity
          style={styles.Login}
          onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.Signup}
          onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.signupText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '400',
    color: '#666',
    textAlign: 'center',
  },
  appNameText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 40,
  },
  ImageContainer:{
    marginTop: 40,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: width * 0.6,
  },
  image: {
    height: '100%',
    width: width * 0.8,
    resizeMode: 'contain',
  },
  bottom:{
    width: '100%',
    alignItems: 'center',
  },
  Login:{
    backgroundColor: '#4A90E2',
    marginBottom: 16,
    padding: 16,
    borderRadius: 30,
    width: '100%',
    shadowColor: '#4A90E2',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4},
    shadowRadius: 12,
    elevation: 6,
  },
  Signup:{
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 30,
    width: '100%',
    borderWidth: 2,
    borderColor: '#4A90E2',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  signupText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#4A90E2',
  },
});

export default WelcomeScreen;
