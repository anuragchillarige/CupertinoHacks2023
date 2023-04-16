import React, {useState} from 'react'
import {StyleSheet, TextInput, View, Button,Text,TouchableOpacity} from 'react-native'

export default function EventView(props){
    return (
        <View style={styles.card}>
            <View style>
                <View style = {styles.cardContentCentered}>
                    <Text style = {styles.headline}>Event Name</Text>
                </View>
            </View>
            <View style={styles.cardContent}>
                <Text style = {styles.otherText}>Location: </Text>
                <Text style = {styles.otherText}>Date and Time: </Text>
                <View style={{width:"100%", flexDirection: "row", justifyContent: "space-between", alignContent: "center"}}>
                    <Text style = {styles.otherText}>Details: </Text>
                    <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.headline}>+</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style = {styles.cardContent}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#2d64ac",
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333",
        shadowOpacity: 0.55,
        shadowRadius: 10,
        marginHorizontal: 20,
        marginVertical: 6,


    },
    cardContent: {
        marginHorizontal: 30,
        marginVertical: 10,
    },
    cardContentCentered:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 5,
        backgroundColor: '#75c4dc',
        marginHorizontal: 20
    },
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 0,
        width: 200,
        color: 'black'
    
      },
      otherText: {
        fontWeight: '200',
        fontSize: 18,
        marginVertical: 15,
        color: 'black'

      },
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#75c4dc',
        fontWeight: 'bold',
        color: '#75c4dc',
        width:40,
        height:40,
        textAlign: 'center',
        borderRadius: 100,
        alignSelf: "center"
        
      }

})