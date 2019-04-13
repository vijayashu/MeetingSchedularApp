import React from 'react';
import { ScrollView, StyleSheet,View,Button,TextInput } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Rooms from './Rooms'
import DateElement from './DateElement'
import Users from './Users'
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
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
  textInput: {
    fontSize: 17,
    lineHeight: 15,
    width: '75%',
  },
  text: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    width: '75%',
    marginBottom: '10%',
    textAlign: 'center',
  },
});
