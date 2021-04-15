import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Button, View, ImageBackground } from 'react-native'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'
import { FontAwesome } from '@expo/vector-icons'

export default () => {
  const signInWithFacebookAsync = async () => {
    try {
      await Facebook.initializeAsync({ appId: '356016298775966' })
      
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile'] })

      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '488756602057-qbcmjbrk5jkvbhhs3v0ssqvc1ti78rib.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        console.log(result)
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  
  return (
    <View style={styles.container}>
      <FontAwesome.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={ signInWithFacebookAsync }
      >Facebook</FontAwesome.Button>
      <FontAwesome.Button
        name="google"
        backgroundColor="#db4437"
        onPress={ signInWithGoogleAsync }
      >Google</FontAwesome.Button>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
    flexDirection: 'row',
  },
})
