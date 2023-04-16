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
                        <TouchableOpacity onPress={() => handleLocationChange('Creekside Park')}>
                            <Text style={styles.locationOption}>Creekside Park</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Jollyman Park')}>
                            <Text style={styles.locationOption}>Jollyman Park</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Memorial Park')}>
                            <Text style={styles.locationOption}>Memorial Park</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Monta Vista Park')}>
                            <Text style={styles.locationOption}>Monta Vista Park</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Portal Park')}>
                            <Text style={styles.locationOption}>Portal Park</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Wilson Park')}>
                            <Text style={styles.locationOption}>Wilson Park</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Sam H. Lawson Middle School')}>
                            <Text style={styles.locationOption}>Sam H. Lawson Middle School</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('John F Kennedy Middle School')}>
                            <Text style={styles.locationOption}>John F Kennedy Middle School</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Hyde Middle School')}>
                            <Text style={styles.locationOption}>Hyde Middle School</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLocationChange('Ortega Park')}>
                            <Text style={styles.locationOption}>Ortega Park</Text>
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
