/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Favorite extends Component {
  static componentName = 'Favorite';

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return  (
      <View>
        <Text>收藏</Text>
      </View>
    )
  }
}

export default Favorite;
