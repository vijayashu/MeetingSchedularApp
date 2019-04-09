import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform,
  TextInput,
  TouchableOpacity,
 } from 'react-native';
import firebase from 'firebase'
import * as FirebaseAPI from '../modules/firebaseAPI';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  
  static navigationOptions = {
    title: 'Login'
  };

  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }

  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user)
      
      if (user) {
        navigation.navigate('Main');
      }
    });
  }

  createUser() {
    FirebaseAPI.createUser(this.state.email, this.state.password)
  }

  signIn() {
    FirebaseAPI.signInUser(this.state.email, this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>BlackRock</Text>
          <TextInput 
            style={styles.textInput}
            placeholder="Email Id"
            placeholderTextAlign = 'center'
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            paddingTop= {10}
            placeholder="Password"
            secureTextEntry
          />

          <TouchableOpacity
            style={{marginTop: '5%'}}
            style={styles.button}
            onPress={() => this.signIn()}
          >
            <View>
              <Text>Log In</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={{marginTop: '5%'}}
            style={styles.button1}
            onPress={() => this.createUser()}
          >
            <View>
              <Text>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    paddingTop: '30%',
  },
  textInput: {
    backgroundColor: "white",
    padding: 15,
    margin: 20,
    justifyContent: "center",
    //alignItems: "center",
    borderRadius: 40,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width:250
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width:100
  },
  
  button1: {
    backgroundColor: "white",
    padding: 10,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width:100
  },

  text: {
    fontSize: 60,
    color: 'white',
    fontWeight:'bold',
    width: '100%',
    //marginBottom: '1%',
    textAlign: 'center',
  },
});
