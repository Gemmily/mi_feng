/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    BackHandler,
    StatusBar,
    Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
import {Toast} from './components';
import {reset, back} from './utils/NavigatorUtil';
import {AppNavigator} from './AppNavigator';

class App extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired
    };

    static defaultProps = {};

    constructor(props) {
        super(props);

    }

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this._goBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._goBack);

    }


    _goBack = () => {
        const {dispatch, nav} = this.props;
        if (nav.routes.length > 1) {
            dispatch(back());
            return true;
        } else {
            Alert.alert('提示', '是否关闭应用', [
                {
                    text: '确认',
                    onPress: () => {
                        // BackHandler.exitApp();
                    },
                    style: 'default'
                }, {
                    text: '取消',
                    onPress: () => {

                    },
                    style: 'cancel'
                }
            ])

            return true;
        }
        return true;
    };


    render() {
        const {dispatch, nav} = this.props;
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content"/>
                <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
                <Toast/>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.get('nav'),
});

export default connect(mapStateToProps)(App);