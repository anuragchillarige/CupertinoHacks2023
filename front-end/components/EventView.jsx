import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { StyleSheet, TextInput, View, Button, Text, TouchableOpacity, Alert, Image } from 'react-native'
import { db, auth } from '../firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


export default function EventView({ eventName, location, date, startTime, endTime, details, docID, attendees, host }) {

    const [currUser, loading] = useAuthState(auth)
    const [inEvent, setInEvent] = useState(false)
    const [eventHost, setEventHost] = useState('')

    const addToEvent = async () => {
        if (!attendees.includes(currUser.uid)) {

            console.log("hello there!")
            console.log(attendees)

            try {
                await updateDoc(doc(db, "events", docID), {
                    peopleJoining: [...attendees, currUser.uid]
                })
            }
            catch (e) {
                console.log(e)
                Alert.alert("Error", "Could not join event.")
            }
        }

        setInEvent(true)
    }

    useEffect(() => {
        if (currUser === null) {
            return;
        }

        if (attendees.includes(currUser.uid)) {
            setInEvent(true)
        }

    }, [])

    return (
        <View style={styles.card}>
            <View style>
                <View style={styles.cardContentCentered}>
                    <Text style={styles.headline}>{eventName}</Text>
                </View>
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.otherText}>Location: {location} </Text>
                <Text style={styles.otherText}>Date and Time: {date} at {startTime} </Text>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignContent: "center" }}>
                    <Text style={styles.otherText}>Details: {details} </Text>
                    
                </View>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignContent: "center" }}>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Image source={require("../assets/pfp.webp")} style={{
                        marginTop:20,
                        backgroundColor: 'white',
                        height: 30,
                        width: 30,
                        borderRadius: 100,
                    }} />
                    <Text style={styles.otherText2}>{host}</Text>
                    </View>
                
                    <TouchableOpacity style={styles.button} onPress={() => addToEvent()}>
                        <Text style={styles.headline}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.cardContent}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#2d64ac",
        shadowOffset: { width: 1, height: 1 },
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
    cardContentCentered: {
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
    otherText2: {
        fontWeight: '200',
        fontSize: 18,
        marginVertical: 15,
        color: 'black',
        marginLeft: 20,
        marginTop: 20

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#75c4dc',
        fontWeight: 'bold',
        color: '#75c4dc',
        width: 40,
        height: 40,
        textAlign: 'center',
        borderRadius: 100,
        alignSelf: "center"

    }

})