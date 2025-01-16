import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function Home() {
  return (
    <View style = {{flex:1, backgroundColor:'#fff',paddingTop:10}}>
      <Text style = {styles.heading} >Notes</Text>
      <View style = {styles.body}>
        <TextInput
          placeholder='Search...'
          style = {styles.search}
        />
        <View>
          <FlatList />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading:{
    textAlign:'center',
    fontSize:25,
  },
  body:{
    marginTop:30,
    marginHorizontal:20
  },
  search:{
    borderWidth:0.5,
    borderRadius:20,
    padding:12,
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
  },
});
