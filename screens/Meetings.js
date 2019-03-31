import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            agenda: 'Hackathon Update',
            venue: 'Sariska',
            date:'2/4/2019',
            time:'1:00-1:30',
         },
         {
            id: 1,
            agenda: '1 on 1 with manager',
            venue: 'Godavari',
            date:'2/4/2019',
            time:'4:00-4:30'
         },
         {
            id: 2,
            agenda: 'APG Tech Weekly',
            venue: 'Gateway',
            date:'4/4/2019',
            time:'1:00-1:30'
         },
         {
            id: 3,
            agenda: 'Fireside chat with Jody',
            venue: 'Sariska',
            date:'5/4/2019',
            time:'1:00-2:00'
         }
      ]
   }
   alertItemName = (item) => {
      var details="Agenda : "+item.agenda+"\n\n Date : "+item.date+"\n\n Time : "+item.time+"\n\n Venue : "+item.venue
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
                        {item.agenda}
                        {'       '+item.date}
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