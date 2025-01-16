import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import SignupScreen from './src/Screens/SignupScreen';
import LoginScreen from './src/Screens/LoginScreen';
import Home from './src/Screens/Home';
import Addnote from './src/Screens/Addnote';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="AddNote" component={Addnote} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
