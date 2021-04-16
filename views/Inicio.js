import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

export default function (){
    return (
        <View style={styles.ini}>
            <View style={styles.img}>
                <Image style={styles.logo} source={require("../assets/img/25.jpg")} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    logo:{
      width: 100,
      height: 100,
      marginTop: 100
    },
    img:{
        flex:1
    },
    ini:{
        background: '#DAADAD'
    }
  })