import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation(); // Get the navigation object

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setIsOpen(false);
  };

  const popToScreen = (screenName) =>{
    navigation.pop(screenName);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.hamburgerMenu}
        onPress={toggleDropdown}
      >
        <View style={styles.hamburger}>
        <Image source={require("../assets/profile.png")} style={{backgroundColor: 'white',
    height: 50,
    width:50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',}}/>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  hamburgerMenu: {
    padding: 10,
  },
  hamburger: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  hamburgerText: {
    fontSize: 42,
    color: '#fff',
  },
  menu: {
    position: 'absolute',
    top: 30,
    right: 0,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    padding: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Dropdown;
