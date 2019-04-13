import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Sariska',
            slot:'12:00-12:30',
            slot1:'13:00-13:30',
            slot2:'16:00-18:00',
         },
         {
            id: 1,
            name: 'Gateway',
            slot:'12:00-13:00',
            slot1:'14:00-14:30',
            slot2:'05:00-06:00',
         },
         {
            id: 2,
            name: 'Ellora',
            slot:'16:00-16:30',
            slot1:'19:00-20:30',
            slot2:'21:00-22:00',
         },
         {
            id: 3,
            name: 'Godavri',
            slot:'09:00-10:30',
            slot1:'13:00-14:30',
            slot2:'18:00-19:00',
         },
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
      marginTop: 10,
      backgroundColor: 'black',
      alignItems: 'center',
   },
   text: {
      color: 'white'
   }
})