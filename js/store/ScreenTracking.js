import { NavigationActions } from 'react-navigation';



const getCurrentRouteName = (navigationState) => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return getCurrentRouteName(route);
    }
    return route.routeName;
}

const screenTracking = ({ getState }) => next => (action) => {
    const isNavigate = action.type === NavigationActions.NAVIGATE;
    const isBack = action.type === NavigationActions.BACK;
    const isReset = action.type === NavigationActions.RESET;
    const isInit = action.type === NavigationActions.INIT;
    if (!(isNavigate || isBack || isReset || isInit)) {
        return next(action);
    }
    const result = next(action);
    
    return result;
};

export default screenTracking;
