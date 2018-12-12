/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator,CheckBox} from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { List, ListItem,Icon } from 'react-native-elements'
import queryKeys from '../../config/queryKeys.json'

export default class CustomKeyPanel extends Component {
  static componentName = 'CustomKeyPanel';

  constructor(props) {
    super(props);

    this.state = {
      checked:false
    };
  }

  render() {
    console.log(queryKeys,'==')
    return  (
      <List>
      {
        queryKeys.map((item) => (
          <ListItem
            key={item.name}
            title={item.name}
            rightIcon={()=><CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={item.checked}
            />}
          />
        ))
      }
</List>
    )
  }
}
