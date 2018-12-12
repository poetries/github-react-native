/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet,ActivityIndicator,FlatList,Avatar} from 'react-native';
import Search from 'react-native-search-box';
import { connect } from 'react-redux';
import { List, ListItem,Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

const menuConfig = [
  {
    title: 'Key排序',
    icon: 'sort',
    type: 'MaterialIcons',
    action: ()=>Actions.sortKey()
  },
  {
    title: '自定义Key',
    icon: 'flight-takeoff',
    type: 'MaterialIcons',
    action: ()=>Actions.customKey()
  },
  {
    title: '移除Key',
    icon: 'delete',
    type: 'MaterialCommunityIcons',
    action: ()=>Actions.removeKey()
  },
  {
    title: '自定义主题',
    icon: 'settings',
    type: 'Feather',
    action: ()=>Actions.customTheme()
  },
  {
    title: '关于作者',
    icon: 'person-pin',
    type: 'MaterialIcons',
    action: ()=>Actions.aboutAuthor()
  },
  {
    title: '反馈',
    icon: 'feedback',
    type: 'MaterialIcons',
    action: ()=>Actions.feedBack()
  },
  {
    title: '分享',
    icon: 'share',
    type: 'MaterialIcons',
    action: ()=>Actions.feedBack()
  }
]


export default class SideMenu extends Component {
  static componentName = 'SideMenu';

  constructor(props) {
    super(props);

    this.state = {

    };
  }
  
  render () {
    return (
      <List containerStyle={{borderBottomColor: '#fff',backgroundColor:this.props.theme}}>
          {
            menuConfig.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                leftIcon={<Icon
                  containerStyle={{paddingRight:10}}
                  name={item.icon}
                  type={item.type}
                  color="#fff"
                />}
                onPress={()=>item.action?item.action():null}
                rightIcon={{color:'#fff'}}
                titleStyle={{color:'#fff'}}
              />
            ))
          }
    </List>
    )
  }
}
