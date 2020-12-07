import React from 'react';
import { Navigation } from 'react-native-navigation';
import { load } from '../services/storage';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from '../screens/auth/LoginScreen';
import AboutScreen from '../screens/dashboard/AboutScreen';
import HomeScreen from '../screens/dashboard/HomeScreen';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('About', () => AboutScreen);

export const layouts = new Promise(resolve => {
  Promise.all([
    Icon.getImageSource('ios-home-outline', 20),
    Icon.getImageSource('ios-information-circle-outline', 20)
  ]).then(icons => {
    resolve({
      authRoot: {
        root: {
          component: {
            name: 'Login',
          }
        }
      },
      mainRoot: {
        root: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Home',
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      text: 'Home',
                      icon: icons[0]
                    }
                  }
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'About',
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      text: 'About',
                      icon: icons[1]
                    }
                  }
                }
              }
            ]
          }
        }
      }
    })
  })
})

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#fafafa',
    style: 'dark'
  },
  topBar: {
    title: {
      color: 'black'
    },
    backButton: {
      color: 'black'
    },
    background: {
      color: '#fafafa'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
  }
});

const AppNavigation = Navigation.events().registerAppLaunchedListener(async () => {
  const user = await load('userInfo')
  const auth = await layouts.then(({authRoot}) => authRoot)
  const main = await layouts.then(({mainRoot}) => mainRoot)
  Navigation.setRoot(user != 'NotFoundError' ? main : auth);
});

export default AppNavigation