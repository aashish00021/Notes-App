import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import IMAGES from '../Assets/images';
import { useNavigation } from '@react-navigation/native';


export default function BackButton() {
    const navigation = useNavigation();
  return (
        <TouchableOpacity
            onPress={() => {navigation.goBack();}}
        >
            <Image style = {{height:35, width:35}} source={IMAGES.BACK}/>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({})