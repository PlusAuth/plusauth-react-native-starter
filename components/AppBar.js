import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const AppBar = () => (
  <View style={styles.container}>
    <Text style={styles.text}>PlusAuth React Native Starter</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2196F3',
    width: '100%',
    height: 64,
    justifyContent: 'center',
    paddingStart: 12
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})

export default AppBar
