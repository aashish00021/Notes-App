import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import getCardColor from '../components/cardColor';
import { useNavigation } from '@react-navigation/native';


const DATA = [
  {
    id : 1,
    date : new Date().toDateString(),
    title: 'Note 1',
    description: 'This is my first note',
  },
  {
    id : 2,
    date : new Date().toDateString(),
    title: 'Note 2',
    description: 'This is my second note',
  },
  {
    id : 3,
    date : new Date().toDateString(),
    title: 'Note 3',
    description: 'This is my third note',
  },
  {
    id : 4,
    date : new Date().toDateString(),
    title: 'Note 4',
    description: 'This is my forth note',
  },
];

export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
      <View style={styles.header}>
        <Text style={styles.heading}>My Notes</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Search notes...'
            style={styles.search}
            placeholderTextColor="#666"
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id || ''}
            contentContainerStyle={{paddingHorizontal: 8, paddingVertical: 15}}
            columnWrapperStyle={{gap:12}}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.cardWrapper}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('AddNote')}
              >
                <View style={[styles.card, { backgroundColor: getCardColor() }]}>
                  <View style={styles.cardHeading}>
                    <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                  </View>
                  <Text style={styles.cardDescription} numberOfLines={4}>
                    {item.description}
                  </Text>
                  <Text style={styles.cardDate}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddNote')}
      >
        <Text style = {{fontSize:35, color:'#fff'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
  },
  body: {
    flex: 1,
    paddingHorizontal: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 5,
  },
  searchIcon: {
    marginRight: 8,
  },
  search: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    padding: 6,
  },
  listContainer: {
    flex: 1,
  },
  cardWrapper: {
    flex: 1,
    maxWidth: '50%',
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 15,
    minHeight: 160,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    marginBottom: 12,
  },
  cardHeading: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2c3e50',
  },
  cardDescription: {
    fontSize: 13,
    color: '#34495e',
    lineHeight: 18,
    flex: 1,
  },
  cardDate: {
    fontSize: 11,
    color: '#7f8c8d',
    fontWeight: '500',
    marginTop: 8,
    textAlign: 'right',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2c3e50',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
