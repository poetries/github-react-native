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
import SortKeyPanel from '../components/sideMenu/SortKeyPanel';
import CustomKeyPanel from '../components/sideMenu/CustomKeyPanel';
import RemoveKeyPanel from '../components/sideMenu/RemoveKeyPanel';
import CustomThemePanel from '../components/sideMenu/CustomThemePanel';
import AboutAuthorPanel from '../components/sideMenu/AboutAuthorPanel';
import FeedBackPanel from '../components/sideMenu/FeedBackPanel';

const navbarPropsTabs = {
    ...AppConfig.navbarProps,
    sceneStyle: {
      ...AppConfig.navbarProps.sceneStyle,
      paddingBottom: AppSizes.tabbarHeight,
    },
  };

  export default Actions.create(
    <Scene key="root" {...AppConfig.navbarProps}>
      <Scene key="tabs" initial={'tabBar'}  tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
        <Scene
        //  navBar={()=><Header
        //     leftComponent={
        //       <Icon
        //       name='menu'
        //       type='EvilIcons'
        //       color="#fff"
        //       underlayColor="#03a9f4"
        //       onPress={()=>Actions.search()}
        //     />
        //     }
        //     centerComponent={{ text: '首页', style: { color: AppStyles.navbarTitle.color} }}
        //     // rightComponent={{ icon: 'search', color: AppStyles.navbarTitle.color}}
        //     rightComponent={<Icon
        //       name='search'
        //       type='EvilIcons'
        //       color="#fff"
        //       underlayColor="#03a9f4"
        //       onPress={()=>Actions.search()}
        //     />}
        //     outerContainerStyles={{ backgroundColor: AppStyles.navbar.backgroundColor }}
        //   />}
          // {...navbarPropsTabs}
          title="首页"
          key={'home'}
          iconName={'md-home'}
          iconType={'ionicon'}
          icon={TabIcon}
          component={Home}
          hideNavBar={true}
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
          iconName={'md-apps'}
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
      <Scene
        {...AppConfig.navbarProps}
        key={'sortKey'}
        title={'Sort Key'}
        rightTitle={'Save'}
        onRight={() => Actions.pop()}
        rightButtonTextStyle={{color:'#fff'}}
        component={SortKeyPanel}
        analyticsDesc={' sortKey '}
     />     
     <Scene
        {...AppConfig.navbarProps}
        key={'customKey'}
        title={'自定义Key'}
        rightTitle={'Save'}
        onRight={() => Actions.pop()}
        rightButtonTextStyle={{color:'#fff'}}
        component={CustomKeyPanel}
        analyticsDesc={' customKey '}
     />     
     <Scene
        {...AppConfig.navbarProps}
        key={'removeKey'}
        title={'移除Key'}
        rightTitle={'Save'}
        onRight={() => Actions.pop()}
        rightButtonTextStyle={{color:'#fff'}}
        component={RemoveKeyPanel}
        analyticsDesc={' removeKey '}
     />     
     <Scene
        {...AppConfig.navbarProps}
        key={'customTheme'}
        title={'自定义主题'}
        rightTitle={'Save'}
        onRight={() => Actions.pop()}
        rightButtonTextStyle={{color:'#fff'}}
        component={CustomThemePanel}
        analyticsDesc={' customTheme '}
     />     
     <Scene
        {...AppConfig.navbarProps}
        key={'aboutAuthor'}
        title={'关于作者'}
        component={AboutAuthorPanel}
        analyticsDesc={' aboutAuthor '}
      />     
      <Scene
        {...AppConfig.navbarProps}
        key={'feedBack'}
        title={'反馈'}
        component={FeedBackPanel}
        analyticsDesc={' feedBack '}
      />     

    </Scene>
  )

