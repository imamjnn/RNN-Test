import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class HomeScreen extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Push Test' onPress={() => Navigation.push(this.props.componentId, {
          component: {
            name: 'About'
          }
        })} />
      </View>
    )
  }
}
