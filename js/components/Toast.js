'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';
import CircleProgress from './CircleProgress';
import ProgressBar from './ProgressBar';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const HUD_HEIGHT = 100;
const HUD_WIDTH = 125;

/**
 * 信息提示HUD
 */
class Toast extends React.Component {

    static propTypes = {
        type: PropTypes.string,
        message: PropTypes.string,
        progress: PropTypes.number
    };

    static defaultProps = {
        type: 'none',
        message: '',
        progress: 0
    };

    constructor(props) {
        super(props);
    }

    _getMessageHUD() {
        const content = (
            <View style={[styles.messageContainer]}>
                <View style={[styles.messageBody]}>
                    <Text style={[styles.messageText]}>
                        {this.props.message}
                    </Text>
                </View>
            </View>
        );
        return this._getCustomHud(content);
    }

    _getErrorHUD() {
        const content = (
            <View style={[styles.hudBody]}>
                <Text style={[styles.hudText]} numberOfLines={2}>
                    {this.props.message ? this.props.message : '错误'}
                </Text>
            </View>
        );
        return this._getCustomHud(content);
    }

    _getSuccessHUD() {
        const content = (
            <View style={[styles.hudBody]}>
                <Text style={[styles.hudText]}>
                    {this.props.message ? this.props.message : '成功'}
                </Text>
            </View>
        );
        return this._getCustomHud(content);
    }

    _getProgressHUD() {
        let progress = parseInt(this.props.progress * 100);
        const content = (
            <View style={[styles.messageContainer]}>
                <View style={[styles.messageBody]}>
                    <ProgressBar progress={this.props.progress}
                                 style={{width: SCREEN_WIDTH / 3 * 2, marginTop: 15, marginLeft: 10, marginRight: 10}}/>
                    <Text style={[styles.messageText]}>
                        {`正在拼命为您加载(${progress}%)...`}
                    </Text>
                </View>
            </View>
        );

        return this._getCustomHud(content);
    }

    _getLoadingHUD() {
        const content = (
            <View style={[styles.hudBody]}>
                <CircleProgress/>
                <Text style={[styles.hudText]}>
                    {this.props.message ? this.props.message : '加载中...'}
                </Text>
            </View>
        );
        return this._getCustomHud(content);
    }

    _getCustomHud(content) {
        return (
            <View pointerEvents={'auto'} style={styles.container}>
                <View pointerEvents={'auto'} style={[styles.hudBg]}/>
                {content}
            </View>
        );
    }

    render() {
        this.isProgress = false;
        switch (this.props.type) {
            case 'loading': {
                this.content = this._getLoadingHUD();
                break;
            }
            case 'progress': {
                this.content = this._getProgressHUD();
                this.isProgress = true;
                break;
            }
            case 'success': {
                this.content = this._getSuccessHUD();
                break;
            }
            case 'error': {
                this.content = this._getErrorHUD();
                break;
            }
            case 'message': {
                this.content = this._getMessageHUD();
                break;
            }
            case 'none': {
                this.content = <View/>;
                break;
            }
            default: {
                this.content = this.content || <View/>;
            }
        }

        return (
            this.content
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    hudBg: {
        position: 'absolute',
        top: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    hudBody: {
        width: HUD_WIDTH,
        height: HUD_HEIGHT,
        position: 'absolute',
        top: SCREEN_HEIGHT / 2 - HUD_HEIGHT / 2,
        left: SCREEN_WIDTH / 2 - HUD_WIDTH / 2,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hudText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 16,
        marginTop: 12,
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    messageContainer: {
        top: SCREEN_HEIGHT / 2 - HUD_HEIGHT / 2,
        width: SCREEN_WIDTH / 5 * 4,
        left: SCREEN_WIDTH / 5 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    messageBody: {
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageText: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 16,
        margin: 16
    }
});

const mapStateToProps = state => ({
    type: state.getIn(['toast', 'type']),
    message: state.getIn(['toast', 'message']),
    progress: state.getIn(['toast', 'progress'])
});

export default connect(mapStateToProps)(Toast);