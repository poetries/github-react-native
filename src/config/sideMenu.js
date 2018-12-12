import { Actions } from 'react-native-router-flux';

export const sideMenuConfig = [
    {
      title: 'Tab排序',
      icon: 'sort',
      type: 'MaterialIcons',
      action: ()=>Actions.sortKey()
    },
    {
      title: '自定义Tab',
      icon: 'flight-takeoff',
      type: 'MaterialIcons',
      action: ()=>Actions.customKey()
    },
    {
      title: '移除Tab',
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