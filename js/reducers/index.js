'use strict';

import {combineReducers} from 'redux-immutable';
import ToastReducer from './ToastReducer';
import NavReducer from './NavReducer';

export default combineReducers({
    nav: NavReducer,
    toast: ToastReducer,
});
