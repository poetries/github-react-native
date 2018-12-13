/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, Platform,ViewStyle,ActivityIndicator,StyleSheet,RefreshControl,TouchableHighlight} from 'react-native';
import Search from 'react-native-search-box';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  fetchGithubList
} from '../../redux/actions'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import { List, ListItem,Header,Icon } from 'react-native-elements'
import langs from '../../config/langs.json'
import TabView from '../../components/tabs/TabView'
import {Tabs} from 'antd-mobile-rn'
import SideMenu from '../../components/sideMenu/SideMenu'
import Drawer from 'react-native-drawer'
import AppStyles from '../../theme/styles';
import storage from '../../utils/Storage'

const queryKeys = [
  {name: 'Popular'},
  {name: 'Trending'}
]

@connect(state=>({
  githubList: state.githubList
}),{
  fetchGithubList
})
export default class Favorite extends Component {
  static componentName = 'Favorite';
  static searchBox = null;

  constructor(props) {
    super(props);

    this.state = {
      inSearch: false,
      isOpen:false,
      theme:AppStyles.navbar.backgroundColor,
      data: {},
    };
  }

  componentDidMount(){
    this.props.fetchGithubList('all')

    storage.load({
      key:'themeConfig',
      autoSync: true,
      syncInBackground: true,
      syncInBackground: true
    }).then(res=>this.setState({theme:res.bg}))

  }
  renderHeader(){
    return <Header
    leftComponent={
      <Icon
      name='menu'
      type='EvilIcons'
      color="#fff"
      underlayColor="#03a9f4"
      onPress={()=>this._drawer.open()}
    />
    }
    centerComponent={{ text: '收藏', style: { color: '#fff'} }}
    // rightComponent={{ icon: 'search', color: AppStyles.navbarTitle.color}}
    rightComponent={<Icon
      name='search'
      type='EvilIcons'
      color="#fff"
      underlayColor="#03a9f4"
      onPress={()=>Actions.search()}
    />}
    outerContainerStyles={{ backgroundColor: this.state.theme }}
  />
  }
  render() {
    const list = this.props.githubList.data
    const {theme} = this.state

    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,backgroundColor:theme,opacity: 0.8},
      main: {paddingLeft: 3},
    }
    return (
      <View style={{ flex: 1}}>
      <Drawer
           content={<SideMenu theme={theme} />}
            ref={(ref) => this._drawer = ref}
            openDrawerOffset={100}
            type="overlay"
            styles={drawerStyles}
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            tapToClose={true}
            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            tweenEasing="linear"
            tweenHandler={(ratio) => ({
              main: { opacity:(2-ratio)/2 }
            })}
        >
        {this.renderHeader()}
        <TabView queryKeys={queryKeys} list={list} {...this.props} theme={theme} />
      </Drawer>
      </View>
    )
  }
}
