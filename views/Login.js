import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Image, Text, ScrollView } from 'react-native'

export default class Login extends Component {

  render() {

    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}} scrollEnabled={true}>
      <View>
        <Image
          source={require('@expo/snack-static/img/52.jpeg')}
          style={{ width: 200, height: 200, borderRadius: 100, marginTop: 20, }}
        />
        <Text style={{marginTop: 50, color: '#FFFFFF', fontSize: 20}}> Ingresa con </Text>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")} />
      </View>
      </ScrollView>
    );
  }
};
