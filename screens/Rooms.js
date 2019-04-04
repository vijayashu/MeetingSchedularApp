import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Sariska',
            time:'1:00-1:30',
            slot:'12:00-12:30',
            slot1:'01:00-01:30',
            slot2:'04:00-06:00',
         },
         {
            id: 1,
            name: 'Gateway',
            slot:'12:00-01:00',
            slot1:'02:00-02:30',
            slot2:'05:00-06:00',
         }
      ]
   }
   alertItemName = (item) => {
      var details="Room Name : "+item.name+"\n\n Free Slot : "+item.slot+"\n\n Free Slot : "+item.slot1+"\n\n Free Slot : "+item.slot2
      alert(details)
   }
   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 30,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})