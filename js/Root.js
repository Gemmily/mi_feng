'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

export default class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <App {...this.props} />
            </Provider>
        );
    }
}