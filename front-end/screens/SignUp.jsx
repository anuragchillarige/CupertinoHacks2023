import React, { useState } from 'react'
import { register } from '../firebase.js'
import { View, Text, TextInput, Button } from 'react-native'
import { Alert } from 'react-native'

export default function SignUp() {

    // const name = useRef(null)
    // const email = useRef(null)
    // const password = useRef(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUpCallback = async () => {
        if (name !== '' && email !== '' && password !== '') {
            const result = await register(name, email, password)

            if (!result) {
                Alert.alert("Sign Up Failed", "Unable to create account.")
            }
        }

        else {
            Alert.alert("Sign Up Failed", "Please enter in all fields")
        }
    }

    return (
        <View>
            <Text>Sign Up</Text>
            <TextInput placeholder='name' value={name} onChangeText={(newText) => setName(newText)} />
            <TextInput placeholder='email' value={email} onChangeText={(newText) => setEmail(newText)} />
            <TextInput placeholder='password' secureTextEntry={true} value={password} onChangeText={(newText) => setPassword(newText)} />
            <Button title='sign up' onPress={() => {
                signUpCallback()
            }}></Button>
        </View>
    )
}