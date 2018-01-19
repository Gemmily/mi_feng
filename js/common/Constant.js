
'use strict';

import {
    Dimensions,
    Platform,
    PixelRatio,
    StatusBar
} from 'react-native'

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const statusBarHeight = StatusBar.currentHeight;

export default {
    isIOS,
    isAndroid,
    windowHeight, windowWidth,
    width: windowWidth,
    height: windowHeight,
    //android高度不包含状态栏高度
    containerHeight: isAndroid ? windowHeight - statusBarHeight : windowHeight,
    containerWidth: windowWidth,
    onePixel: 1 / PixelRatio.get(),
    navBarHeight: isIOS ? 64 : 56,
    paddingStatusBar: isIOS ? 20 : 0
}