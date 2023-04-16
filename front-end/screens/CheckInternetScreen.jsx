import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { StackActions } from '@react-navigation/native';

export default class CheckInternetScreen extends React.Component {
  componentDidMount() {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        this.props.navigation.dispatch(StackActions.replace('Login'));
      } else {
        alert('Cannot connect to the internet');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
            style={{width: "80%",height:"10%",alignSelf:'center', }}
             source={require('../assets/transparent-logo.png')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.componentDidMount()}
        >
          <Text style={styles.buttonText}>Try again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});