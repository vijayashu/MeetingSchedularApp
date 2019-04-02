import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AppRegistry } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Dropdown } from 'react-native-material-dropdown';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";

export default class List extends Component {
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
   showVenue = () => {
      return (
         <Venue />
      )
   }

   render() {

      return (
         <View style={styles.container}>
            <Text style={{ color: 'red', fontSize: 20, }}>
               {this.state.chosenDate}
            </Text>
            <TouchableOpacity style={styles.button} onPress={this.showPicker}>
               <Text style={styles.text}>Select Date and TIme</Text>
            </TouchableOpacity>
            <DateTimePicker
               isVisible={this.state.isVisible}
               onConfirm={this.handlePicker}
               onCancel={this.hidePicker}
               mode={'datetime'}
               is24Hour={true}
            />
            <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
               <Menu onSelect={value => alert(`You Clicked : ${value}`)}>

                  <MenuTrigger  >
                     <Text style={styles.headerText}>Select MeetingRoom</Text>
                  </MenuTrigger  >

                  <MenuOptions>
                     <MenuOption value={"Ganges"}>
                        <Text style={styles.menuContent}>Ganges</Text>
                     </MenuOption>
                     <MenuOption value={"Sariska"}>
                        <Text style={styles.menuContent}>Sariska</Text>
                     </MenuOption>
                     <MenuOption value={"Godavari"}>
                        <Text style={styles.menuContent}>Godvari</Text>
                     </MenuOption>
                     <MenuOption value={"Narmada"}>
                        <Text style={styles.menuContent}>Narmada</Text>
                     </MenuOption>
                  </MenuOptions>

               </Menu>
            </MenuProvider>


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
      textAlign: 'center',
      alignItems: 'center'
   },
   headerText: {
      fontSize: 20,
      margin: 10,
      fontWeight: "bold"

   },
   menuContent: {
      color: "#000",
      fontWeight: "bold",
      padding: 2,
      fontSize: 20,
      alignItems: 'center'
   }
});
