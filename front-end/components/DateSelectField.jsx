// DateSelectField.js

import React, { useState } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateSelectField = ({ onDateSelect, changeStartTime, changeEndTime, changeDate }, {navigation}) => { // Accepts a callback function as a prop
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
            <View style={{flex: 0.2}}/>
            <View style= {{flexDirection: "row", flex: 1}}>
              <TouchableOpacity
                  style={styles.inputContainer}
                  onPress={() => setShowStartTimePicker(true)}
              >
                  <Text style={styles.input}>{selectedStartTime ? selectedStartTime : 'Start time'}</Text>
              </TouchableOpacity>

              
                <DateTimePickerModal
                    isVisible={showStartTimePicker}
                    mode=" start time"
                    onConfirm={handleStartTimeChange}
                    onCancel={() => setShowStartTimePicker(false)}
                />

                <Text style={{fontSize: 40}}>
                  -
                </Text>

                <TouchableOpacity
                    style={styles.inputContainer}
                    onPress={() => setShowEndTimePicker(true)}
                >
                    <Text style={styles.input}>{selectedEndTime ? selectedEndTime : 'End time'}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={showEndTimePicker}
                    mode=" end time"
                    onConfirm={handleEndTimeChange}
                    onCancel={() => setShowEndTimePicker(false)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingRight: 20,
        justifyContent: 'space-between',
        width: "80%",
        height: 150
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        flexDirection:"row",
    },
    inputContainer: {
        flexDirection: 'row',
        flex: 0.5,
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
