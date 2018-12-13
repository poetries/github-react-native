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
    Object.keys(userCenterConfig).forEach((key,index)=>{
        let list = <List containerStyle={{marginTop: 0}} key={key}>
          {
            userCenterConfig[key].children.map((item,index) => (
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
        if( userCenterConfig[key].title){
          list = <View key={index}>
              <Text style={{color: '#696262',paddingTop:15,paddingBottom:5,paddingLeft:5}}>{userCenterConfig[key].title}</Text>
              {list}
          </View>
        }
      content.push(list )
    })
    return content
  }
  render() {
    return  (
      <ScrollView>
          {this.renderList()}
      </ScrollView>
    )
  }
}

export default UserCenter;
