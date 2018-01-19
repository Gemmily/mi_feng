'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {BaseComponent} from '../common';
import {View, Text, TouchableOpacity, Image, StyleSheet, ViewPropTypes} from 'react-native';
import {Colors, Fonts} from '../common/Theme';

export default class Button extends BaseComponent {

    static propTypes = {
        identifier: PropTypes.any,
        icon: Image.propTypes.source,
        selectedIcon: Image.propTypes.source,
        select: PropTypes.bool,
        disable: PropTypes.bool,
        title: PropTypes.string,
        titleStyle: Text.propTypes.style,
        style: ViewPropTypes.style,
        containerStyle: ViewPropTypes.style,
        interval: PropTypes.number,
        onPress: PropTypes.func,
        iconDirection: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
        linearGradient: PropTypes.bool,
        startColor: PropTypes.string,
        stopColor: PropTypes.string
    };

    static defaultProps = {
        title: '',
        interval: 0,
        onPress: undefined,
        iconDirection: 'left',
        select: false,
        disable: false,
        linearGradient: false
    };

    constructor(props) {
        super(props);
        this.state = {
            identifier: props.identifier,
            icon: props.icon,
            selectedIcon: props.selectedIcon,
            select: props.select,
            disable: props.disable,
            title: props.title,
            titleStyle: props.titleStyle,
            style: props.style,
            containerStyle: props.containerStyle,
            interval: props.interval,
            onPress: props.onPress,
            iconDirection: props.iconDirection,
            source: props.select ? props.selectedIcon : props.icon,
            startColor: props.startColor,
            stopColor: props.stopColor,
            linearGradient: props.linearGradient
        };
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this._parsePropToState(nextProps);
        this.setSelected(nextProps.select);
    }

    setTitle = (title) => {
        this.setState({
            title: title
        });
    }

    setSelected = (selected = false) => {
        const {selectedIcon, icon} = this.state;
        this.selected = selected;
        let source;
        if (this.selected) {
            source = selectedIcon ? selectedIcon : icon;
        } else {
            source = icon;
        }
        this.setState({
            source: source
        });
    }

    _parsePropToState(nextProps) {
        this.setState({
            identifier: nextProps.identifier,
            icon: nextProps.icon,
            selectedIcon: nextProps.selectedIcon,
            select: nextProps.select,
            disable: nextProps.disable,
            title: nextProps.title,
            titleStyle: nextProps.titleStyle,
            style: nextProps.style,
            containerStyle: nextProps.containerStyle,
            interval: nextProps.interval,
            onPress: nextProps.onPress,
            iconDirection: nextProps.iconDirection,
            startColor: nextProps.startColor,
            stopColor: nextProps.stopColor,
            linearGradient: nextProps.linearGradient
        });
    }

    _renderView() {
        const {source, iconDirection, icon, selectedIcon, title, interval, titleStyle} = this.state;
        const {style, containerStyle, startColor, stopColor, linearGradient} = this.state;

        let views = [];

        if (iconDirection === 'top' || iconDirection === 'left') {
            if (source) {
                views.push(
                    <Image
                        key="navicon"
                        source={source}
                        style={styles.icon}
                    />
                );
            }
            if (title.length > 0) {
                views.push(
                    <Text
                        key="navtitle"
                        style={[styles.title, {marginLeft: interval}, titleStyle]}
                    >
                        {title}
                    </Text>);
            }
        } else {
            if (title.length > 0) {
                views.push(
                    <Text
                        key="navtitle"
                        style={[styles.title, {marginLeft: interval}, titleStyle]}
                    >
                        {title}
                    </Text>);
            }
            if (source) {
                views.push(
                    <Image
                        key="navicon"
                        source={source}
                        style={styles.icon}
                    />
                );
            }
        }
        const direction = iconDirection === 'top' || iconDirection === 'bottom' ?
            'column' : 'row';
        const touchStyle = linearGradient ? styles.flex : style;
        return (
            <TouchableOpacity
                style={touchStyle}
                removeClippedSubviews
                onPress={this._onPress}
            >
                <View
                    style={[styles.container, {flexDirection: direction}, containerStyle]}
                    removeClippedSubviews
                >
                    {views}
                </View>
            </TouchableOpacity>
        );
    }

    _onPress = () => {
        const {onPress, identifier} = this.state;
        onPress && onPress(identifier, this);
    };

    render() {
        const {style, startColor, stopColor, linearGradient} = this.state;

        return (

            this._renderView()

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        overflow: 'hidden'
    },
    flex: {
        flex: 1
    },
    icon: {},
    title: {
        fontSize: Fonts.h4,
        color: Colors.tint,
        marginBottom: 2,
        backgroundColor: Colors.translucent
    }
});
