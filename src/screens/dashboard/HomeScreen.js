import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

export default class HomeScreen extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Push Screen</Text>
        <Button title='Push Test' onPress={() => Navigation.push(this.props.componentId, {
          component: {
            name: 'About'
          }
        })} />
      </View>
    )
  }
}

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  }
}
