// DateSelectField.js

import React, { useState } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateSelectField = ({ onDateSelect, changeStartTime, changeEndTime, changeDate }) => { // Accepts a callback function as a prop
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedStartTime, setSelectedStartTime] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);
    const [selectedEndTime, setSelectedEndTime] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date.toDateString());
        changeDate(date)
        setShowDatePicker(false);
    }

    const handleStartTimeChange = (startTime) => {
        let properTime = startTime.toLocaleString().split(",")[1].trim()
        console.log(properTime)
        setSelectedStartTime(properTime);
        changeStartTime(startTime)
        setShowStartTimePicker(false);
    }

    const handleEndTimeChange = (endTime) => {
        let properTime = endTime.toLocaleString().split(",")[1].trim()
        console.log(properTime)
        setSelectedEndTime(properTime);
        changeEndTime(endTime)
        setShowEndTimePicker(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity
                style={styles.inputContainer}
                onPress={() => setShowDatePicker(true)}
            >
                <Text style={styles.input}>{selectedDate ? selectedDate : 'Select a date'}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={showDatePicker}
                mode="date"
                onConfirm={handleDateChange}
                onCancel={() => setShowDatePicker(false)}
            />


            <Text style={styles.label}>Start Time - End Time</Text>
            <TouchableOpacity
                style={styles.inputContainer}
                onPress={() => setShowStartTimePicker(true)}
            >
                <Text style={styles.input}>{selectedStartTime ? selectedStartTime : 'Select a start time'}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={showStartTimePicker}
                mode=" start time"
                onConfirm={handleStartTimeChange}
                onCancel={() => setShowStartTimePicker(false)}
            />

            <TouchableOpacity
                style={styles.inputContainer}
                onPress={() => setShowEndTimePicker(true)}
            >
                <Text style={styles.input}>{selectedEndTime ? selectedEndTime : 'Select a end time'}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={showEndTimePicker}
                mode=" end time"
                onConfirm={handleEndTimeChange}
                onCancel={() => setShowEndTimePicker(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingRight: 20,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
});

export default DateSelectField;
