import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity, Text, Linking, FlatList, Touchable, Alert } from 'react-native';
import Dropdown from '../components/DropDown';
import SearchBar from '../components/SearchBar';
import EventView from '../components/EventView';

import { db, auth } from '../firebase';

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    orderBy,
    onSnapshot,
    QuerySnapshot,
} from "firebase/firestore";

import { useAuthState } from 'react-firebase-hooks/auth';

state = {
    search: '',
};

updateSearch = (search) => {
    this.setState({ search });
};

export default function LoginScreen({ navigation }) {
    const [people, setPeople] = useState([
    ]);

    const [currUser, loading] = useAuthState(auth)

    useEffect(() => {
        if (currUser === null) {
            navigation.navigate("Login")
        }
        try {
            const q = query(collection(db, "events"), orderBy("date"))

            const unsub = onSnapshot(q, (snapshot) => {
                let tempArr = []
                let i = 0;
                snapshot.forEach((event) => {
                    let data = event.data()
                    data['id'] = i
                    currDate = data['date'].toDate().toString()

                    dateArr = currDate.split(" ")

                    let stringDate = ''

                    for (let i = 0; i < 4; i++) {
                        stringDate += dateArr[i] + ' '
                    }

                    stringDate = stringDate.trim()

                    data['date'] = stringDate;

                    let rawTime = data['startTime'].toDate()
                    let somewhatProper = rawTime.toLocaleString().split(",")[1].trim()
                    let properTime = somewhatProper.substring(0, somewhatProper.lastIndexOf(":")) + somewhatProper.substring(somewhatProper.indexOf(" "))
                    console.log(properTime)

                    data['startTime'] = properTime;

                    rawTime = data['endTime'].toDate()
                    somewhatProper = rawTime.toLocaleString().split(",")[1].trim()
                    properTime = somewhatProper.substring(0, somewhatProper.lastIndexOf(":")) + somewhatProper.substring(somewhatProper.indexOf(" "))

                    data['endTime'] = properTime
                    data['docID'] = event.id

                    tempArr.push(data)
                    i++
                })

                setPeople(tempArr)
                console.log(people)
            })

            return () => unsub;
        }
        catch (e) {
            console.log(e)
            Alert.alert("Error", "Could not fetch events")
        }
    }, [])
    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity style={styles.overlayButton} onPress={() => {
                navigation.navigate("CreateEvent")
            }} >
                <Text style={{ alignSelf: 'center' }}>
                    Add Event
                </Text>

            </TouchableOpacity>

            <View style={{ flex: 0.03 }} />
            <View style={{ flex: 1 }}>
                <FlatList
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    data={people}
                    renderItem={({ item }) => (
                        < EventView eventName={item.eventName} location={item.location} date={item.date} startTime={item.startTime} details={item.description} docID={item.docID} attendees={item.peopleJoining} host={item.host} />
                    )}
                />
            </View>



            <View style={styles.header}>
                <Image source={require("../assets/transparent-logo.png")} style={styles.logo} />
                <TouchableOpacity style={styles.profileButton}>
                    <Dropdown />
                </TouchableOpacity>

            </View>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column-reverse',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 80,
        borderColor: "#75c4dc",
        borderBottomWidth: 2,
    },
    logo: {
        width: 250,
        height: 75,
    },
    profileButton: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
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
