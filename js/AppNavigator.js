'use strict';

import React from 'react';
import {
    View,

} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import {
    CardPage,
    HomePage,
    SettingPage
} from './page';
import {Button} from './components';
import {Colors, Fonts, Metrics} from './common/Theme';
import TabBarItem from './components/TabBarItem'
// 注册tabs
const Tabs = TabNavigator({
        HomePage: {
            screen: HomePage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '每日精选',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        focused={focused}
                        normalImage={require('./images/leftbar_set_de.png')}
                        selectedImage={require('./images/leftbar_set_s.png')}
                    />
                )
            }),
        },
        CardPage: {
            screen: CardPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '卡包',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        focused={focused}
                        normalImage={require('./images/leftbar_set_de.png')}
                        selectedImage={require('./images/leftbar_set_s.png')}
                    />
                )
            }),
        },
        SettingPage: {
            screen: SettingPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        focused={focused}
                        normalImage={require('./images/leftbar_set_de.png')}
                        selectedImage={require('./images/leftbar_set_s.png')}
                    />
                )
            })
        },
    },
    {
        animationEnabled: false,//点击切换时标签页下的指示器是否有动画效果
        tabBarPosition: 'bottom',//标签页的具体放置位置 android 默认为'top' iOS为'bottom'
        lazy: true,//是否懒加载标签页  true时首次点击跳转页面的时候会有空白过度页面显示
        swipeEnabled: true,//是否可以滑动左右拖动切换
        tabBarOptions: {
            activeTintColor: Colors.orange,//设置选中字体和图片颜色
            inactiveTintColor: Colors.text2,//未选中字体颜色
            showLabel: true,//是否显示 标签页
            showIcon: true,//是否显示图片
            upperCaseLabel: false,//标签（英文）文字是否大写
            scrollEnabled: false, //多个时（超出屏幕）标签页是否可以左右滑动
            //标签页文字区域样式
            labelStyle: {
                fontSize: 12,//字体大小
                margin: 5
            },
            //整个标签页的样式
            style: {
                backgroundColor: '#fff',
            },
            //指示器样式
            indicatorStyle: {
                backgroundColor: '#ccc',
                height: 0,
            }
        }
    }
);


export const AppNavigator = StackNavigator({
    Tab: {
        screen: Tabs,
        // navigationOptions: {
        //     header: null
        // }
    },

}, {
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: ({navigation, navigationOptions}) => ({
        headerTintColor: Colors.white,
        headerTitleStyle: {
            fontSize: Fonts.h2,
            alignSelf: 'center',
            textAlign: 'center'
        },
        headerStyle: {
            backgroundColor: Colors.main,
            shadowOpacity: 0,
            elevation: 0
        },
        headerRight: navigationOptions.headerRight ? navigationOptions.headerRight : <View/>,
        headerLeft: (
            navigationOptions.headerLeft ? navigationOptions.headerLeft :
                <Button
                    icon={require('./images/nav_back.png')}
                    onPress={() => navigation.goBack()}
                />
        ),
    })
});