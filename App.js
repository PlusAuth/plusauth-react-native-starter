/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react'
import type {Node} from 'react'
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native'
import {authorize, logout} from 'react-native-app-auth'

import AppBar from './components/AppBar'

// Get PlusAuth Config
const config = require('./plusauth-env')

const defaultAuthState = {
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: '',
  idToken: ''
}

const App: () => Node = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profileInfo, setProfileInfo] = useState(null)
  const [authState, setAuthState] = useState(defaultAuthState)

  const login = async () => {
    try {
      // Redirect PlusAuth Login page to authenticate user
      const result = await authorize(config)
      setAuthState(result)
      setIsLoggedIn(true)
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = async () => {
    try {
      // Logout session from PlusAuth
      await logout(config, {
        idToken: authState.idToken,
        postLogoutRedirectUrl: config.postLogoutRedirectUrl
      })
      // Clear local session state
      setAuthState(defaultAuthState)
      setIsLoggedIn(false)
      setProfileInfo(null)
    } catch (error) {
      console.log(error)
    }
  }

  const getProfileInfo = async () => {
    try {
      // Get authenticated user info
      const response = await fetch(
        'https://starters.plusauth.com/oidc/userinfo',
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + authState.accessToken
          }
        }
      )
      const json = await response.json()
      setProfileInfo(json)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <AppBar />
      <View style={styles.indexContainer}>
        <Text style={styles.welcomeText}>
          Welcome to PlusAuth React Native Demo!
        </Text>
        <Text style={styles.usernameText}>
          Username: {profileInfo === null ? '-' : profileInfo.username}
        </Text>
        <View style={styles.buttonContainer}>
          {!isLoggedIn ? (
            <Button title="Login" color="#2196F3" onPress={() => login()} />
          ) : (
            <>
              <Button
                color="#2196F3"
                title="Get Profile Info"
                onPress={() => getProfileInfo()}
              />
              <View style={styles.profileButton}>
                <Button
                  color="#D32F2F"
                  title="Logout"
                  onPress={() => signOut()}
                />
              </View>
              <Text style={{marginTop: 16}}>
                {profileInfo === null ? '' : JSON.stringify(profileInfo)}
              </Text>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  indexContainer: {
    textAlign: 'center'
  },
  welcomeText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 18
  },
  usernameText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 16
  },
  buttonContainer: {
    marginTop: 16,
    paddingHorizontal: 24
  },
  profileButton: {
    marginTop: 16
  }
})

export default App
