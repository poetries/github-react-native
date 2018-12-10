/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class UserCenter extends Component {
  static componentName = 'UserCenter';

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return  (
      <View>
        <Text>用户中心</Text>
      </View>
    )
  }
}

export default UserCenter;
