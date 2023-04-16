import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
    return(
        <View style = {styles.container}>
            <TextInput placeholder= "Search here"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:50,
        height:50,
        backgroundCOlor:"gray",
        borderRadius:9
    },
    searchInput:{
        width:"100%",
        height:"100%",
        paddingLeft:8,
        fontSize:16,
    },
});

export default SearchBar;