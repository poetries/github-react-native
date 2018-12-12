/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { List, ListItem,Icon,ButtonGroup } from 'react-native-elements'
import Utils from '../../utils/Utils'

const randomColor16 = Utils.randomColor()

export default class CustomThemePanel extends Component {
  static componentName = 'CustomThemePanel';

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  render() {

    return  (
      <ScrollView style={{marginTop:-15}}>
            <View style={ {flexWrap:'wrap',justifyContent:'space-around',flexDirection:'row',marginTop:20}}>
                 {
                  randomColor16.map((v,index)=>{
                     return  <View key={index} style={ {width:80,height:80,backgroundColor:v,margin:5}}>
                     <Text style={ {fontSize:16}}>{v}</Text>
                </View>
                   })
                 }
            </View>
    </ScrollView>
    )
  }
}
