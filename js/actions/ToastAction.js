
'use strict';

import {ToastTypes} from '../constants';

export const showSuccess = message => dispatch => {
    dispatch(showToast(ToastTypes.TOAST_SUCCESS, message));
    setTimeout(() => {
        dispatch(hide(message));
    }, 1000);
};

export const showError = message => dispatch => {
    dispatch(showToast(ToastTypes.TOAST_FAILURE, message));
    setTimeout(() => {
        dispatch(hide(message));
    }, 1000);
};

export const showMessage = message => dispatch => {
    dispatch(showToast(ToastTypes.TOAST_MESSAGE, message));
    setTimeout(() => {
        dispatch(hide(message));
    }, 1500);
};

export const showLoading = message => showToast(ToastTypes.TOAST_LOADING, message);

export const hide = message => showToast(ToastTypes.TOAST_HIDE, message);

const showToast = (type, message = '') => ({
    type,
    message
});