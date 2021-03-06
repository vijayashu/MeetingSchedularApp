// import component
import React, { Component } from 'react';
import { View,StyleSheet,TextInput } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { Dropdown } from 'react-native-material-dropdown';
export default class Users extends Component {

  state = {
    selectedItems : [],
  };

    items = [{
    id: '92iijs7yta',
    name: 'Aditya Verma',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Aman Gupta',
  },  {
    id: 'nahs75a5sg',
    name: 'Aviral Shrivastav',
  }, {
    id: '667atsas',
    name: 'Shreyas Aiyar',
  },{
    id: '16hbajsabsd',
    name: 'Vijaya Lakshmi',
  }];

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
  
  render() {
    var { selectedItems } = this.state.selectedItems;
    let data = [{
      value: 'Sariska',
    }, {
      value: 'Gateway',
    }, {
      value: 'Ellora',
    },{
        value: 'Godavari',
      }];
    return (
      <View style={{ flex: 1 }}>
        <MultiSelect
          hideTags
          items={this.items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Choose Employees"
          searchInputPlaceholderText="Search Employees"
          onChangeInput={ (text)=> console.log(text)}
          altFontFamily="Roboto"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Invite"
        />
        <Dropdown
        label='Select your room'
        data={data}
        />
        <TextInput  
         style={styles.textInput}
         placeholder="Agenda"
         placeholderTextAlign = 'center'
         selectionColor="#428AF8"
         underlineColorAndroid= "#428AF8"
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
textInput: {
  fontSize: 23,
  lineHeight: 24,
  width: '75%',
  padding: 10,
  marginTop: 10
},
}) 