
'use strict';

import { NavigationActions } from 'react-navigation';

export const reset = routeName => NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: routeName })
    ]
});

export const back = params => NavigationActions.back(params);

export const setParams = value => NavigationActions.setParams(value);

export const navigate = (routeName, params, action) => NavigationActions.navigate({
    routeName,
    params,
    action,
});