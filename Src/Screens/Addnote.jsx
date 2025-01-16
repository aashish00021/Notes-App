import { StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';
import React from 'react';
import BackButton from '../components/backButton';

export default function Addnote() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <BackButton style={styles.backbutton}/>
      <Text style={styles.heading}>Add Note</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Title'
          placeholderTextColor="#666"
          style={styles.titleInput}
        />
        <TextInput
          placeholder='Type something...'
          placeholderTextColor="#666"
          style={styles.descriptionInput}
          multiline
          textAlignVertical="top"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  backbutton: {
    position: 'absolute',
    zIndex: 1,
    top: 17,
    left: 13,
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    marginVertical: 15,
  },
  inputContainer: {
    flex: 1,
    padding: 20,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 12,
    marginBottom: 20,
  },
  descriptionInput: {
    flex: 1,
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
    paddingTop: 10,
  },
});
