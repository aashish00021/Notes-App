import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
//   console.log('Welcome Screen Loaded');
  return (
    <View>
      <Text style={styles.header}>Welcome Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    fontSize: 20,
    color: 'black',
  },
});

export default WelcomeScreen;
