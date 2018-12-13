import { Actions } from 'react-native-router-flux';

export const userCenterConfig = {
    githubPopular: [{
        title: 'Github Popular',
        icon: 'flight-takeoff',
        type: 'MaterialIcons',
        action: ()=>Actions.sortKey()
    }],
    customTrendingLanguage: [{
        title: '自定义语言',
        icon: 'flight-takeoff',
        type: 'MaterialIcons',
        action: ()=>Actions.customKey()
    },
    {
        title: '语言排序',
        icon: 'delete',
        type: 'MaterialCommunityIcons',
        action: ()=>Actions.removeKey()
    }],
    customPopularKey: [{
        title: '自定义Tab',
        icon: 'flight-takeoff',
        type: 'MaterialIcons',
        action: ()=>Actions.customKey()
     },
    {
        title: 'Tab排序',
        icon: 'sort',
        type: 'MaterialIcons',
        action: ()=>Actions.sortKey()
      },
      {
        title: '移除Tab',
        icon: 'delete',
        type: 'MaterialCommunityIcons',
        action: ()=>Actions.removeKey()
    }],
    settings: [{
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
    }]
}
