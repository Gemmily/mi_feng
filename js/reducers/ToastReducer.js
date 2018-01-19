'use strict';

import * as ToastTypes from '../constants/ToastTypes';
import { Map } from 'immutable';

const initialState = Map({
    type: 'none',
    message: '',
    progress: 0
});

export default function ToastReducer(state = initialState, action) {
    switch (action.type) {
        case ToastTypes.TOAST_LOADING: {
            return state.update('type', v => 'loading').update('message', v => action.message);
        }
        case ToastTypes.TOAST_SUCCESS: {
            return state.update('type', v => 'success').update('message', v => action.message);
        }
        case ToastTypes.TOAST_FAILURE: {
            return state.update('type', v => 'error').update('message', v => action.message);
        }
        case ToastTypes.TOAST_MESSAGE: {
            return state.update('type', v => 'message').update('message', v => action.message);
        }
        case ToastTypes.TOAST_HIDE: {
            return state.update('type', v => 'none').update('message', v => '');
        }
        default: {
            return state;
        }
    }
}