import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { layouts } from '../../navigations/AppNavigation'
import { remove } from '../../services/storage'

export default class AboutScreen extends Component {

  onLogout = async () => {
    remove('userInfo')
    const auth = await layouts.then(({authRoot}) => authRoot)
    Navigation.setRoot(auth)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>React Native Navigation Boilerplate</Text>
        <Button title='Logout Test' color='red' onPress={() => this.onLogout()} />
      </View>
    )
  }
}

AboutScreen.options = {
  topBar: {
    title: {
      text: 'About'
    }
  }
}
