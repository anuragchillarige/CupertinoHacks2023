import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity, Text, Linking, FlatList } from 'react-native';

export default function LoginScreen({navigation}) {
    const [people, setPeople] = useState([
        { name: 'shaun', id: '1' },
        { name: 'yoshi', id: '2' },
        { name: 'mario', id: '3' },
        { name: 'luigi', id: '4' },
        { name: 'peach', id: '5' },
        { name: 'toad', id: '6' },
        { name: 'bowser', id: '7' },
      ]);
  return (
    <SafeAreaView style={styles.container}>

        <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name}</Text>
        )} 
       />
       <View style={styles.header}>
          
       </View>
    </SafeAreaView>

      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'column-reverse',
  },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#c62828',
    height: 80,
    paddingHorizontal: 20,
  },
  logo: {
    width: 75,
    height: 75,
  },
  profileButton: {
    backgroundColor: '#c62828',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
      });    
