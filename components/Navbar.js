import {View, Image, StyleSheet} from 'react-native'
import React from 'react'

export default function (){
    return(
        <View style={styles.nav}>
            <View >
            <Image style={styles.logo} source={require("../assets/img/17.jpg")} />
            </View>
            <View>
            <Image style={styles.logo} source={require("../assets/img/18.png")} />
            </View>
            <View>
            <Image style={styles.logo} source={require("../assets/img/19.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
      width: 30,
      height: 30,
      marginTop: 30
    },
    nav:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        background: '#FFFFFF',
        flex:2
    }
  })