import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Image, TextInput, TouchableOpacity, Text, Linking, FlatList, Touchable, Alert } from 'react-native';
import DateSelectField from '../components/DateSelectField';
import Dropdown from '../components/DropDown';
import LocationDropdown from '../components/LocationDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
import { auth, db } from '../firebase';
import DateTimePickerModal from "react-native-modal-datetime-picker";



export default function CreateEventScreen({ navigation }) {

    const [currUser, loading] = useAuthState(auth)
    const [name, setName] = useState('')
    const [location, setLocation] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [date, setDate] = useState()
    const [description, setDescription] = useState()


    const submitData = async () => {
        console.log(startTime)

        let submittedData = {
            eventName: name,
            location: location,
            date: date,
            startTime: startTime,
            endTime: endTime,
            description: description,
            host: currUser.uid
        }

        try {
            await addDoc(collection(db, 'events'), submittedData)
        }
        catch (e) {
            console.log(e)
            Alert.alert("Error", "Could not add event")
        }


        console.log(submittedData)
    }


    useEffect(() => {
        if (currUser == null) {
            navigation.navigate('Login')
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.signUpButton} onPress={() => {
                submitData()
            }}><Text style={{ color: 'white', textAlign: 'center', fontSize: 18, }}>Create Event</Text></TouchableOpacity>
            <View style={{ flex: 0.6, marginTop: 20 }}>
                <TextInput style={styles.inputField} placeholder='Description' value={description} onChangeText={(newText) => setDescription(newText)} />
            </View>
            <View style={{ flexDirection: 'row', flex: 0.2, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: "50%", marginTop: 20, height: "100%" }}>
                    <LocationDropdown useStateFunc={setLocation} />
                </View>
                <DateSelectField changeStartTime={setStartTime} changeEndTime={setEndTime} changeDate={setDate} />
            </View>

            <View style={{ flex: 0.1, marginTop: 20 }}>
                <TextInput style={styles.inputField} placeholder='Name of Event' value={name} onChangeText={(newText) => setName(newText)} />
            </View>


            <View style={{ flex: 0.1, marginTop: 10 }}>
                <Text style={styles.headerText}>
                    Create Your Own Event
                </Text>

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
        borderColor: "#C1C1C1",
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
    headerText: {
        fontSize: 40,
        alignSelf: "flex-start",
        paddingLeft: 15
    },
    inputField: {
        alignSelf: 'center',
        width: '80%',
        backgroundColor: 'white',
        fontSize: 20,
        borderRadius: 5,
        shadowColor: 'grey',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3,
        marginBottom: '5%',
        height: '100%',
        paddingLeft: 10,
    },
    signUpButton: {
        width: '80%',
        marginTop: 50,
        backgroundColor: 'blue',
        alignSelf: 'center',
        height: '10%',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3,
        shadowColor: '#3446eb',
        justifyContent: 'center',
    }
});    
