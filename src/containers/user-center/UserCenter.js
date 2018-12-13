/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { List, ListItem,Header,Icon } from 'react-native-elements'
import { userCenterConfig } from '../../config/userCenterConfig'

class UserCenter extends Component {
  static componentName = 'UserCenter';

  constructor(props) {
    super(props);

    this.state = {

    };
  }
  renderList(){
    const content = []
    Object.keys(userCenterConfig).forEach(key=>{
      content.push(
        <List containerStyle={{marginBottom: 0}} key={key}>
            {
              userCenterConfig[key].map((item,index) => (
                <ListItem
                  key={index}
                  title={item.title}
                  leftIcon={<Icon
                    containerStyle={{paddingRight:10}}
                    name={item.icon}
                    type={item.type}
                    // color="#fff"
                  />}
                  onPress={()=>item.action?item.action():null}
                  // rightIcon={{color:'#fff'}}
                />
              ))
            }
          </List>
      )
    })
    return content
  }
  render() {
    return  (
      <View>
          {this.renderList()}
      </View>
    )
  }
}

export default UserCenter;
