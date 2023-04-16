import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity, Text, Linking, FlatList, Touchable } from 'react-native';
import Dropdown from '../components/DropDown';
export default function CreateEventScreen({navigation}) {
    
  return (
    <SafeAreaView style={styles.container}>
        <View style ={{flex:1}}>

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
