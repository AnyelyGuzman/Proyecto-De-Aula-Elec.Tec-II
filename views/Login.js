import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import state from '../redux'

export default (props) => {  
  const signInWithFacebookAsync = async () => {
    props.navigation.push("inicio")
  }

  const signInWithGoogleAsync = async () => {
    props.navigation.push("inicio")
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={require("../assets/img/13.jpg")}>
        <View style={styles.cont}>
          <Image style={styles.logo} source={require("../assets/img/52.jpeg")} />
          <Text style={styles.text}>Ingresa con:</Text>
          <View style={styles.btnCont}>
            <FontAwesome.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={signInWithFacebookAsync}
            >Facebook</FontAwesome.Button>
            <FontAwesome.Button
              name="google"
              backgroundColor="#db4437"
              onPress={signInWithGoogleAsync}
            >Google</FontAwesome.Button>
            <StatusBar style="auto" />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  cont: {
    alignItems: 'center',
  },
  btnCont:{
    alignContent: 'space-between',
    flexDirection: 'row',
    marginTop: 70
  },
  img: {
    flex: 1,
    resizeMode: 'cover'
  },
  logo:{
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginTop: 100
  },
  text: {
    marginTop: 60
  }
})