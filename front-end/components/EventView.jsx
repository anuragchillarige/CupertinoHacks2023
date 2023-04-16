import React, {useState} from 'react'
import {StyleSheet, TextInput, View, Button,Text} from 'react-native'

export default function EventView(props){
    return (
        <View style={styles.card}>
            <View style = {styles.cardContentCentered}>
                <Text style = {styles.headline}>Event Name</Text>
            </View>
            <View style={styles.cardContent}>
                <Text>Location: </Text>
                <Text>Date and Time: </Text>
                <Text>Details: </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#6495ed",
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333",
        shadowOpacity: 0.4,
        shadowRadius: 3,
        marginHorizontal: 4,
        marginVertical: 6,


    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    cardContentCentered:{
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 2-0,
        height: 30,
        backgroundColor: '#87cefa',
        justifyContent: 'center',
        alignItems: 'center',
    },

})