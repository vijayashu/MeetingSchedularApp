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

  _showDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: true });

  _showDateTimePicker3 = () => this.setState({ isDateTimePickerVisible3: true });
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker1();
  };
  
  render () {
    var currentDate= new Date();
    return (
      <View style={{ flex: 1 }}>
      <View style={styles.container}>
      <View style={styles.textContainer}>
      <TouchableOpacity onPress={this._showDateTimePicker3}>
      <View style={styles.button1}>
          <Text style={ styles.text }>Choose Meeting Date</Text>
          </View>
        </TouchableOpacity>
        <DateTimePicker style={styles.text}
            //placeholder="Agenda"
          isVisible={this.state.isDateTimePickerVisible3}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker1}
          minimumDate= {currentDate}
        />
        </View>
        <View style={styles.textContainer1}>
          <TouchableOpacity onPress={this._showDateTimePicker1}>
      <View style={styles.button}>
          <Text style={ styles.text }>Start Time</Text>
          </View>
        </TouchableOpacity>
        <DateTimePicker style={styles.text}
          isVisible={this.state.isDateTimePickerVisible1}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker1}
          mode='time'
        />
        </View>
        <View style={styles.textContainer2}>
           <TouchableOpacity onPress={this._showDateTimePicker2}>
      <View style={styles.button}>
          <Text style={ styles.text }>End Date</Text>
          </View>
        </TouchableOpacity>
        <DateTimePicker style={styles.text}
          isVisible={this.state.isDateTimePickerVisible2}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker1}
          mode='time'
        />

          </View>
      </View>
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
    //paddingTop: '50%',
  },
  textContainer1: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    //paddingTop: '10%',
  },
  textContainer2: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    //paddingTop: '10%',
  },
  textInput: {
    fontSize: 60,
    lineHeight: 24,
    width: '75%',
  },
  button1: {
    backgroundColor: "black",
    padding: 5,
    margin: 30,
    justifyContent: "center",
    //alignItems: "center",
    borderRadius: 100,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width:200
  },
  text1: {
    color: 'white',
    fontWeight:'bold',
    fontSize:15,
    marginVertical: 10,
    marginHorizontal: 10
  },
  button: {
    backgroundColor: "black",
    padding: 5,
    margin: 30,
    justifyContent: "center",
    //alignItems: "center",
    borderRadius: 100,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width:120
  },
  text: {
    color: 'white',
    fontWeight:'bold',
    fontSize:15,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center'
  }
});
