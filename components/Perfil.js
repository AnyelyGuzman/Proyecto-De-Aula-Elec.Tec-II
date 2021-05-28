import React from 'react'
import { View, Image, StyleSheet, Text, Button } from 'react-native'
import { CheckBox } from 'react-native-elements'

export default function() {
    return (

        <View style={styles.cont}>
            <View style={styles.ti}>
                <Image style={styles.log} source={require("../assets/img/21.png")} />
                <Text style={styles.creden}>Editar Perfil</Text>
            </View>
            <View style={styles.ti}>
                <Text style={styles.creden}>Nombre</Text>
            </View>
            <View style={styles.ti}>
                <Text style={styles.creden}>Apellido</Text>
            </View>
            <View style={styles.ti}>
                <Text style={styles.creden}>Correo Electronico</Text>
            </View>
            <View style={styles.ti}>
                <Text style={styles.creden}>Celular</Text>
            </View>
            <View style={styles.ti}>
                <Text style={styles.creden}>Ciudad</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ti: {
        padding: 5,
        background: '#FFFFFF',
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    log: {
        width: 40,
        height: 40,
        marginTop: 40
    },
    creden:{
        fontSize: 30,
        padding: 5,
        background: '#FFFFFF',
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
