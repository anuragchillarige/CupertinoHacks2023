import React, { useState } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const LocationDropdown = ({ navigator, useStateFunc }) => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
        useStateFunc(location)
        setModalVisible(false);
    };

    const renderLocationOptions = () => {
        return (
            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >

                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => handleLocationChange('Location 1')}>
                            <Text style={styles.locationOption}>Location 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Location 2')}>
                            <Text style={styles.locationOption}>Location 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Location 3')}>
                            <Text style={styles.locationOption}>Location 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Location 4')}>
                            <Text style={styles.locationOption}>Location 4</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={selectedLocation}
                editable={false}
                placeholder="Select Location"
                style={styles.textInput}
                onTouchStart={() => setModalVisible(true)}
            />
            {renderLocationOptions()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: "80%",
        paddingTop: 10,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        borderRadius: 5,
    },
    locationOption: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
});

export default LocationDropdown;
