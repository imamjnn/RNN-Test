import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { loginRoot } from '../../navigations/AppNavigation'
import { remove } from '../../services/storage'

export default class AboutScreen extends Component {

  onLogout = () => {
    remove('userInfo')
    Navigation.setRoot(loginRoot)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Logout Test' color='red' onPress={() => this.onLogout()} />
      </View>
    )
  }
}
