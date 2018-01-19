/**
 * Created by 庄彪 on 2017/7/28.
 */
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
    ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';

export default class ProgressBar extends Component {

    static propTypes = {
        ...ViewPropTypes,
        progress: PropTypes.number,
        fillStyle: ViewPropTypes.style
    };

    static defaultProps = {
        easing: Easing.inOut(Easing.ease),
        easingDuration: 500
    };

    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(this.props.progress || 0)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.progress >= 0 && this.props.progress != prevProps.progress) {
            this.update();
        }
    }

    render() {

        const fillWidth = this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1 * this.props.style.width ? this.props.style.width : styles.background.width]
        });

        return (
            <View style={[styles.background, this.props.style]}>
                <Animated.View style={[styles.fill, this.props.fillStyle, { width: fillWidth }]}/>
            </View>
        );
    }

    update() {
        Animated.timing(this.state.progress, {
            easing: this.props.easing,
            duration: this.props.easingDuration,
            toValue: this.props.progress
        }).start();
    }
}

var styles = StyleSheet.create({
    background: {
        backgroundColor: '#dddddd',
        height: 5,
        width: 100,
        overflow: 'hidden'
    },
    fill: {
        backgroundColor: '#ff5e00',
        height: 5
    }
});