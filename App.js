import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,AppRegistry } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosenDate: ''
    }
  }
  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
    })
  }
  hidePicker = () => {
    this.setState({
      isVisible: false
     
    })
  }
  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the meeting schedular app!</Text>
        <Text style={{ color:'red, fontSize:20,'}}>
            {this.state.chosenDate}
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.showPicker}>
          <Text style={ styles.text }>Select Date and TIme</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}
          is24Hour={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#330066',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  }
});
