import React, { useState } from "react"
import { forgotPassword, login } from "../firebase"
import { Button, Text, TextInput, View, Alert, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native"



export default function Login({ navigation }) {
    const [email, getName] = useState("")
    const [password, getPassword] = useState("")


    const findLogin = async () => {
        if (email !== '' && password !== '') {
            const result = await login(email, password)
            if (!result) {
                Alert.alert("Unable To Find Account, please double check fields")
            } else {
                Alert.alert("Sucess! Welcome Back!")
                navigation.navigate('Settings')
            }

        } else {
            Alert.alert("Login Failed", "Please enter in all fields")
        }
    }

    const style = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: '#eaeaea',
        },
        logo: {
            flex: 1,
            width: "60%",
            height: 40,
            resizeMode: "contain",
            alignSelf: "center"

        },
        title: {
            marginLeft: '10%',
            fontSize: 25,
            margin: 0,
            marginBottom: '5%'
        },
        view: {
            flex: 3,

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
        button: {
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



    return (
        <SafeAreaView style={style.container}>
            <Image style={style.logo} source={require('../assets/transparent-logo.png')} />
            <View style={style.view}>
                <Text style={style.title}> Login To Your Account</Text>
                <TextInput style={style.inputField} autoCapitalize="none" placeholder="email" onChangeText={(text) => getName(text)}></TextInput>
                <TextInput style={style.inputField} autoCapitalize="none" placeholder="password" onChangeText={(text) => getPassword(text)} secureTextEntry={true}></TextInput>
                <TouchableOpacity style={style.button} onPress={() => {
                    findLogin()
                }}><Text style={{ color: 'white', textAlign: 'center', fontSize: 18, }}>Login</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}
