/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

export default class SortKeyPanel extends Component {
  static componentName = 'SortKeyPanel';

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return  (
      <View>
        <Text>SortKeyPanel</Text>
      </View>
    )
  }
}
