import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Example: initial is loading screen then either App or Auth screen
    // AuthLoading: AuthLoadingScreen,
    // App: AppStack,
    // Auth: AuthStack,
    Main: MainTabNavigator,
  })
);
