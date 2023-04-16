import React, {useState} from "react"
import { forgotPassword, login } from "../firebase"
import { Button, Text, TextInput, View, Alert} from "react-native"

export default function Login() {
    const[email, getName] = useState("")
    const[password, getPassword] = useState("")


    const findLogin = async() => {
        if (email !== '' && password !== '') {
            const result = await login(email, password)
            if(result) {
                Alert.alert("Success! Welcome Back!")
            } else 
            Alert.alert("Login Failed! Please check all fields")
        }
    }
    

        return(
            <View>
            <Text> Login </Text>
            <TextInput placeholder="email" onChangeText={(text) => getName(text)}></TextInput>
            <TextInput placeholder="pass" onChangeText={(text) => getPassword(text)} secureTextEntry={true}></TextInput>
            <Button title='login' onPress={() => {
                findLogin()
            }}></Button>
            </View>
            
        
        
        )
        
}