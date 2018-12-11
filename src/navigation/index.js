/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import { Icon,Header } from 'react-native-elements';
import Home from '../containers/home/Home';
import Search from '../containers/search/Search';
import Trending from '../containers/trending/Trending';
import Favorite from '../containers/favorite/Favorite';
import UserCenter from '../containers/user-center/UserCenter';
import AppConfig from '../constants/config';
import AppSizes from '../theme/sizes';
import AppStyles from '../theme/styles';
import TabIcon from '../components/TabIcon';

const navbarPropsTabs = {
    ...AppConfig.navbarProps,
    sceneStyle: {
      ...AppConfig.navbarProps.sceneStyle,
      paddingBottom: AppSizes.tabbarHeight,
    },
  };

  export default Actions.create(
    <Scene key="root" {...AppConfig.navbarProps}>
      <Scene key="tabs" initial={'tabBar'} hideNavBar tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
        <Scene
         navBar={()=><Header
            leftComponent={
              <Icon
              name='menu'
              type='EvilIcons'
              color="#fff"
              underlayColor="#03a9f4"
              onPress={()=>Actions.search()}
            />
            }
            centerComponent={{ text: '首页', style: { color: AppStyles.navbarTitle.color} }}
            // rightComponent={{ icon: 'search', color: AppStyles.navbarTitle.color}}
            rightComponent={<Icon
              name='search'
              type='EvilIcons'
              color="#fff"
              underlayColor="#03a9f4"
              onPress={()=>Actions.search()}
            />}
            outerContainerStyles={{ backgroundColor: AppStyles.navbar.backgroundColor }}
          />}
          {...navbarPropsTabs}
          key={'home'}
          iconName={'md-home'}
          iconType={'ionicon'}
          onRight={() => Actions.userCenter()}
          rightButtonTextStyle={AppStyles.navbarTitle}
          icon={TabIcon}
          component={Home}
          analyticsDesc={' Home '}
        />
        <Scene
          {...navbarPropsTabs}
          key={'trending'}
          title={'趋势'}
          iconName={'md-trending-up'}
          iconType={'ionicon'}
          icon={TabIcon}
          component={Trending}
          analyticsDesc={' Trending '}
        />
        <Scene
          {...navbarPropsTabs}
          key={'favorite'}
          title={'收藏'}
          iconName={'md-star'}
          iconType={'ionicon'}
          icon={TabIcon}
          component={Favorite}
          analyticsDesc={' Favorite '}
        />
        <Scene
          {...navbarPropsTabs}
          key={'userCenter'}
          title={'用户中心'}
          iconName={'md-person-add'}
          iconType={'ionicon'}
          icon={TabIcon}
          component={UserCenter}
          analyticsDesc={' UserCenter '}
        />
      </Scene>
  
      <Scene
        {...AppConfig.navbarProps}
        key={'search'}
        title={'搜索'}
        component={Search}
        analyticsDesc={' searchView '}
      />

    </Scene>
  )

