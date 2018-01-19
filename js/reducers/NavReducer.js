'use strict';

import {AppNavigator} from '../AppNavigator';
import {NavigationActions} from 'react-navigation';

// const firstAction = AppNavigator.router.getActionForPathAndParams('TabBar');
// const initialNavState = AppNavigator.router.getStateForAction(
//     firstAction
// );

const routeIsInCurrentState = (state, routeName) => {
    if(state && state.routeName === routeName) {
        return true;
    }

    if(state && state.routes) {
        return routeIsInCurrentState(state.routes[state.index], routeName);
    }

    return false;
};

export default function nav(state , action) {
    
    if (state && action.type === NavigationActions.BACK && action.routeName) {
        //这里可以自己在外部自定义一个ActionType，然后判断是否是自定义的ActionType
        const backRoute = state.routes.find((route) => route.routeName === action.routeName);
        if (backRoute) {
            const backRouteIndex = state.routes.indexOf(backRoute);
            const route = {
                ...state,
                routes: state.routes.slice(0, backRouteIndex + 1),
                index: backRouteIndex
            };
            return route;
        }
    }

    if (state && action.type === NavigationActions.NAVIGATE) {
        if(routeIsInCurrentState(state, action.routeName)) {
            return state;
        }
    }

    if (state && action.type === NavigationActions.RESET) {
        if(state.routes.length === 1 && routeIsInCurrentState(state, action.actions[0].routeName)) {
            return state;
        }
    }

    let nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}