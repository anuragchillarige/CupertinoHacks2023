import React, { useState } from 'react'
import { register } from '../firebase.js'
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import { Alert } from 'react-native'

export default function SignUp() {

    // const name = useRef(null)
    // const email = useRef(null)
    // const password = useRef(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const signUpCallback = async () => {
        if (name !== '' && email !== '' && password !== '' && cPassword !== '') {
            if (password === cPassword) {
                const result = await register(name, email, password)

                if (!result) {
                    Alert.alert("Sign Up Failed", "Unable to create account.")
                }
            }

            else {
                Alert.alert("Sign Up Failed", "Passwords must match.")
            }
        }

        else {
            Alert.alert("Sign Up Failed", "Please enter in all fields")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logoImage} source={require('../assets/transparent-logo.png')} />
            <View style={styles.inputContainer}>
                <Text style={styles.textLabel}>Create an Account</Text>
                <TextInput style={styles.inputField} placeholder='Name' value={name} onChangeText={(newText) => setName(newText)} />
                <TextInput style={styles.inputField} placeholder='Email' value={email} onChangeText={(newText) => setEmail(newText)} />
                <TextInput style={styles.inputField} placeholder='Password' secureTextEntry={true} value={password} onChangeText={(newText) => setPassword(newText)} />
                <TextInput style={styles.inputField} placeholder='Confirm password' secureTextEntry={true} value={cPassword} onChangeText={(newText) => setCPassword(newText)} />
                <TouchableOpacity style={styles.signUpButton} onPress={() => {
                    signUpCallback()
                }}><Text style={{ color: 'white', textAlign: 'center', fontSize: 18, }}>Sign up</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
    },

    logoImage: {
        flex: 1,
        width: '60%',
        height: 40,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    inputContainer: {
        flex: 3,
    },
    textLabel: {
        marginLeft: '10%',
        fontSize: 25,
        margin: 0,
        marginBottom: '5%'
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
        height: '10%',
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

})