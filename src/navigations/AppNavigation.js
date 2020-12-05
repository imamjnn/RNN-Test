import React from 'react';
import { Navigation } from 'react-native-navigation';
import { load } from '../services/storage';

import LoginScreen from '../screens/auth/LoginScreen';
import AboutScreen from '../screens/dashboard/AboutScreen';
import HomeScreen from '../screens/dashboard/HomeScreen';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('About', () => AboutScreen);

export const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home'
                }
              },
            ]
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'About'
                }
              }
            ]
          }
        }
      ]
    }
  }
};
export const loginRoot = {
  root: {
    component: {
      name: 'Login'
    }
  }
};

const AppNavigation = Navigation.events().registerAppLaunchedListener(async () => {
  const user = await load('userInfo')
  console.log('userOKE', user)
  Navigation.setRoot(user != 'NotFoundError' ? mainRoot : loginRoot);
});

export default AppNavigation