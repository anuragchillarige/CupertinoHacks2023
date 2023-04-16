import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity, Text, Linking, FlatList, Touchable } from 'react-native';
import Dropdown from '../components/DropDown';
import SearchBar from '../components/SearchBar';

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

        <FlatList 
        numColumns={1}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name} {item.id}</Text>
        )} 
       />

      <View style={{width:"80%", height:20, backgroundColor:"gray", alignSelf: "center", marginTop:10, flexDirection:"row"}}>
          <SearchBar />
          <TouchableOpacity style={{flex:0.1, backgroundColor:"blue"}}>
            <Text style={{alignSelf:'center'}}>
              +
            </Text>

          </TouchableOpacity>
      </View>

       <View style={styles.header}>
          <Image source={require("../assets/FullLogo.png")} style={styles.logo}/>
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
    borderColor: "#C1C1C1",
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
      });    
