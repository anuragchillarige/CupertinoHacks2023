import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity, Text, Linking, FlatList, Touchable } from 'react-native';
import Dropdown from '../components/DropDown';
import SearchBar from '../components/SearchBar';
import EventView from '../components/EventView';

state = {
  search: '',
};

updateSearch = (search) => {
  this.setState({ search });
};

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

      <TouchableOpacity style={styles.overlayButton} >
            <Text style={{alignSelf:'center'}}>
              Add Event
            </Text>

          </TouchableOpacity>
        
        <View style={{flex:0.03}}/>
      <View style={{flex:1}}>
        <FlatList 
          numColumns={1}
          keyExtractor={(item) => item.id} 
          data={people} 
          renderItem={({ item }) => ( 
            <EventView/>
          )}
        />
      </View>
        
       

       <View style={styles.header}>
          <Image source={require("../assets/transparent-logo.png")} style={styles.logo}/>
          <TouchableOpacity style={styles.profileButton}>
            <Dropdown/>
          </TouchableOpacity>
          
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
    backgroundColor: 'white',
    height: 80,
    borderColor: "#75c4dc",
    borderBottomWidth:2,
  },
  logo: {
    width: 250,
    height: 75,
  },
  profileButton: {
    backgroundColor: 'white',
    height: 50,
    width:50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10
  },
  overlayButton: {
    backgroundColor: '#75c4dc',

    width: "90%",
    height: 60,
    justifyContent: 'center',
    alignSelf: "center",
    alignItems: 'center',
  },
      });    
