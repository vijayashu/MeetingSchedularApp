import React, { Component } from 'react';
import { Text, TouchableOpacity, View,Button,TextInput,StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
 
export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible1: false,
    isDateTimePickerVisible2: false,
    isDateTimePickerVisible3: false,
  };
 
  _showDateTimePicker1 = () => this.setState({ isDateTimePickerVisible1: true });
 
  _hideDateTimePicker1 = () => this.setState({ isDateTimePickerVisible1: false });

  _hideDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: false });

  _showDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: true });

  _showDateTimePicker3 = () => this.setState({ isDateTimePickerVisible3: true });
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker1();
  };

  _handleDatePicked1 = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker2();
  };
  
  render () {
    var currentDate= new Date();
    return (
      <View style={{ flex: 1 }}>
      <Button title="Choose the meeting date" onPress={this._showDateTimePicker3}></Button>
        <DateTimePicker style={styles.text}
            placeholder="Agenda"
          isVisible={this.state.isDateTimePickerVisible3}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker1}
          minimumDate= {currentDate}
        />
          <Button title="Start time" onPress={this._showDateTimePicker1}></Button>
        <DateTimePicker style={styles.text}
          isVisible={this.state.isDateTimePickerVisible1}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker1}
          mode='time'
        />
           <Button title="End time" onPress={this._showDateTimePicker2}></Button>
        <DateTimePicker style={styles.text}
          isVisible={this.state.isDateTimePickerVisible2}
          onConfirm={this._handleDatePicked1}
          onCancel={this._hideDateTimePicker2}
          mode='time'
        />

          <TextInput  style={styles.textInput}
            placeholder="Agenda"
          />
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    paddingTop: '50%',
  },
  textInput: {
    fontSize: 17,
    lineHeight: 24,
    width: '75%',
  },
  text: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    width: '75%',
    marginBottom: '20%',
    marginTop:'10%',
    textAlign: 'center',
  },
});
