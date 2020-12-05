import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { mainRoot } from '../../navigations/AppNavigation'
import { save } from '../../services/storage'

export default class LoginScreen extends Component {

  onLogin = () => {
    save('userInfo', 'Imam Jinani')
    Navigation.setRoot(mainRoot)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Login Test' onPress={() => this.onLogin()} />
      </View>
    )
  }
}
