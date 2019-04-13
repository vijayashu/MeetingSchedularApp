import React from 'react';
import { ScrollView, StyleSheet,View,Button,TextInput,TouchableOpacity,Text,Alert } from 'react-native';
import AllRooms from './AllRooms'
import Rooms from './Rooms'
import DateElement from './DateElement'
import Users from './Users'
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Schedular',
  };
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {date:"04-04-2019"}
  }
  render() {
    return (
    <View style={styles.container}>
      <DateElement></DateElement>
      <Users></Users>

      <TouchableOpacity onPress={() => {
    Alert.alert('Meeting created succesfully');
  }}>
      <View style={styles.button1}>
          <Text style={ styles.text }>Create Meeting</Text>
          </View>
        </TouchableOpacity>
      <Rooms></Rooms>
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
  text: {
    color: 'white',
    fontWeight:'bold',
    fontSize:15,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center'
  },
  button1: {
    backgroundColor: "black",
    padding: 5,
    margin: 10,
    justifyContent: "center",
    //alignItems: "center",
    borderRadius: 100,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width:200
  },
});
