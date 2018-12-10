/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Search from 'react-native-search-box';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  fetchGithubList
} from '../../redux/actions'
import CardBody from 'antd-mobile-rn/lib/card/CardBody.native';
// import ListItem from './List'
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

@connect(state=>({
  githubList: state.githubList
}),{
  fetchGithubList
})
export default class Home extends Component {
  static componentName = 'Home';
  static searchBox = null;

  constructor(props) {
    super(props);

    this.state = {
      inSearch: false,
      data: {},
    };
  }

  componentDidMount(){
    this.props.fetchGithubList('poetries').then(res=>{
      this.setState({listData:res.data})
    })
  }

  render() {
    const list = this.props.githubList.data
    
    return (
      <ScrollView>
          <View>
                <List>
                    {
                          list && list.length
                          ? list.map(v => (
                                  <ListItem
                                      // roundAvatar
                                      // avatar={{uri:l.avatar_url}}
                                      key={v.node_id}
                                      title={v.description}
                                      onPress={()=>Actions.trending()}
                                  />
                            ))
                          : null
                    }
            </List>
          </View>
      </ScrollView>
    )
  }
}



