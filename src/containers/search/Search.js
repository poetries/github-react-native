/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { SearchBar ,ListItem,List} from 'react-native-elements'
import {
    fetchGithubList
  } from '../../redux/actions'

@connect(state=>({
    githubList: state.githubList
  }),{
    fetchGithubList
  })
export default class Search extends Component {
  static componentName = 'Search';

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const list = this.props.githubList.data

    return  (
      <View>
        <SearchBar
            lightTheme
            round
            showLoadingIcon={false}
            onChangeText={keyword=>this.props.fetchGithubList(keyword)}
            icon={{ type: 'font-awesome', name: 'search' }}
            inputStyle={{backgroundColor:'#ddd'}}
            placeholder='Type Here...'
         />
        <ScrollView>
        <List>
        {
                list && list.length
                ? list.map(v => (
                        <ListItem
                            // roundAvatar
                            // avatar={{uri:l.avatar_url}}
                            key={v.node_id}
                            title={v.description}
                            onPress={()=>Actions.search()}
                        />
                ))
                : null
        }
        </List>
        </ScrollView>
      </View>
    )
  }
}

