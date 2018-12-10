/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Trending extends Component {
  static componentName = 'Trending';

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return  (
      <View>
        <Text>趋势</Text>
      </View>
    )
  }
}

export default Trending;
