import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { layouts } from '../../navigations/AppNavigation'
import { save } from '../../services/storage'

export default class LoginScreen extends Component {

  onLogin = async () => {
    save('userInfo', 'Imam Jinani')
    const main = await layouts.then(({mainRoot}) => mainRoot)
    Navigation.setRoot(main)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Login Test' onPress={() => this.onLogin()} />
      </View>
    )
  }
}
