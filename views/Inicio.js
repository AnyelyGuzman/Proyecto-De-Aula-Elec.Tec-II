import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import Cards from '../components/Card'
import img from '../assets/img/52.jpeg'

export default function (){
    return (
        <View style={styles.ini}>
                <Cards image={img} name=" sdf" precio="3"/>
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