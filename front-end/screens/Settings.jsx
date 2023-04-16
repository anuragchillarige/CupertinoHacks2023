import { useEffect, useState } from 'react'
import { register, auth } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import { Alert } from 'react-native'


export default function Settings({ navigation }) {

    const [imgSrc, setImgSrc] = useState('')
    const [currUser, loading] = useAuthState(auth)

    useEffect(() => {
        if (currUser == null) {
            navigation.navigate('Login')
        }

        try {
            console.log(currUser.photoURL)
            setImgSrc(currUser.photoURL)
        }

        catch {
            setImgSrc('')
        }
    }, [])

    return (
        <SafeAreaView>
            <Text>Settings Page</Text>
            <Image source={{ uri: imgSrc }} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})